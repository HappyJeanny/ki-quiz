'use strict';

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  mode: null,           // 'learn' | 'exam'
  selectedModules: [],  // [1..7]
  questions: [],        // filtered + shuffled subset
  current: 0,
  answers: {},          // { questionId: [answerId, ...] }
  submitted: {},        // { questionId: true } – questions answered in learn mode
  examFinished: false,
};

// ─── DOM helpers ──────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

// ─── Fisher-Yates shuffle ─────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  document.querySelectorAll('.module-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      updateStartButtons();
    });
  });
  $('select-all').addEventListener('click', () => {
    document.querySelectorAll('.module-toggle').forEach(b => b.classList.add('selected'));
    updateStartButtons();
  });
  $('select-none').addEventListener('click', () => {
    document.querySelectorAll('.module-toggle').forEach(b => b.classList.remove('selected'));
    updateStartButtons();
  });
  $('btn-learn').addEventListener('click', () => startQuiz('learn'));
  $('btn-exam').addEventListener('click', () => startQuiz('exam'));
  $('btn-prev').addEventListener('click', prevQuestion);
  $('btn-next').addEventListener('click', nextQuestion);
  $('btn-submit-exam').addEventListener('click', submitExam);
  $('btn-restart').addEventListener('click', showStart);
  $('btn-details-wrong').addEventListener('click', () => showDetails('wrong'));
  $('btn-details-all').addEventListener('click', () => showDetails('all'));

  updateStartButtons();
}

function updateStartButtons() {
  const anySelected = document.querySelectorAll('.module-toggle.selected').length > 0;
  $('btn-learn').disabled = !anySelected;
  $('btn-exam').disabled = !anySelected;
}

// ─── Start ────────────────────────────────────────────────────────────────────
function startQuiz(mode) {
  state.mode = mode;
  state.selectedModules = [...document.querySelectorAll('.module-toggle.selected')]
    .map(b => parseInt(b.dataset.module));
  state.answers = {};
  state.submitted = {};
  state.examFinished = false;
  state.current = 0;

  const pool = QUESTIONS.filter(q => state.selectedModules.includes(q.module));
  state.questions = shuffle(pool);

  showScreen('quiz-screen');
  $('mode-badge').textContent = mode === 'learn' ? 'Lernmodus' : 'Prüfungsmodus';
  $('mode-badge').className = 'mode-badge ' + (mode === 'learn' ? 'badge-learn' : 'badge-exam');
  $('btn-submit-exam').style.display = mode === 'exam' ? 'inline-flex' : 'none';
  $('exam-nav').style.display = mode === 'exam' ? 'flex' : 'none';

  renderQuestion();
}

// ─── Render question ──────────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;
  const isMulti = q.answers.filter(a => a.correct).length > 1;
  const isSubmitted = state.mode === 'learn' && state.submitted[q.id];

  // Progress
  $('progress-text').textContent = `${state.current + 1} / ${total}`;
  $('progress-fill').style.width = `${((state.current + 1) / total) * 100}%`;

  // Module badge
  $('module-badge').textContent = `Modul ${q.module}`;

  // Selection type hint – always visible
  const multiHint = $('multi-hint');
  multiHint.style.display = 'none';

  // Question text – highlight negative words
  let qText = escapeHtml(q.question);
  if (q.negativeHighlight) {
    qText = qText.replace(/\b(NICHT|nicht|KEINE|keine|KEIN|kein)\b/g,
      '<span class="negative-highlight">$1</span>');
  }
  $('question-text').innerHTML = qText;

  // Answers
  const container = $('answers-container');
  container.innerHTML = '';
  const selected = state.answers[q.id] || [];

  q.answers.forEach(ans => {
    const item = el('div', 'answer-item');
    item.dataset.id = ans.id;

    if (isSubmitted) {
      if (ans.correct) item.classList.add('correct');
      else if (selected.includes(ans.id)) item.classList.add('wrong');
      else item.classList.add('neutral');
    } else if (selected.includes(ans.id)) {
      item.classList.add('selected-answer');
    }

    const badge = el('span', 'answer-badge', ans.id);
    const text = el('span', 'answer-text');
    text.textContent = ans.text;
    item.appendChild(badge);
    item.appendChild(text);

    if (!isSubmitted) {
      item.addEventListener('click', () => toggleAnswer(q.id, ans.id));
    }
    container.appendChild(item);
  });

  // Submit button (learn mode)
  const submitBtn = $('btn-submit-learn');
  if (state.mode === 'learn') {
    submitBtn.style.display = isSubmitted ? 'none' : 'inline-flex';
    submitBtn.onclick = () => submitLearnAnswer(q.id);
  } else {
    submitBtn.style.display = 'none';
  }

  // Explanation
  const expBox = $('explanation-box');
  if (isSubmitted) {
    expBox.style.display = 'block';
    $('explanation-text').textContent = q.explanation;
    $('explanation-ref').textContent = q.reference;
    const isCorrect = checkAnswer(q);
    expBox.className = 'explanation-box ' + (isCorrect ? 'exp-correct' : 'exp-wrong');
    $('exp-icon').textContent = isCorrect ? '✓' : '✗';
  } else {
    expBox.style.display = 'none';
  }

  // Navigation
  $('btn-prev').disabled = state.current === 0;
  $('btn-next').disabled = state.current === total - 1;

  // Exam: mark visited
  if (state.mode === 'exam') {
    updateExamNav();
  }
}

function toggleAnswer(qId, answerId) {
  if (!state.answers[qId]) state.answers[qId] = [];
  const arr = state.answers[qId];
  const idx = arr.indexOf(answerId);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(answerId);
  renderQuestion();
}

function submitLearnAnswer(qId) {
  if (!state.answers[qId] || state.answers[qId].length === 0) return;
  state.submitted[qId] = true;
  renderQuestion();
}

function checkAnswer(q) {
  const selected = (state.answers[q.id] || []).slice().sort().join(',');
  const correct = q.answers.filter(a => a.correct).map(a => a.id).sort().join(',');
  return selected === correct;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function prevQuestion() {
  if (state.current > 0) { state.current--; renderQuestion(); }
}

function nextQuestion() {
  if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); }
}

function updateExamNav() {
  const nav = $('exam-nav');
  if (!nav) return;
  nav.innerHTML = '';
  state.questions.forEach((q, i) => {
    const dot = el('button', 'nav-dot');
    dot.textContent = i + 1;
    if (i === state.current) dot.classList.add('active');
    if (state.answers[q.id]?.length) dot.classList.add('answered');
    dot.addEventListener('click', () => { state.current = i; renderQuestion(); });
    nav.appendChild(dot);
  });
}

// ─── Exam submit ──────────────────────────────────────────────────────────────
function submitExam() {
  const answered = Object.keys(state.answers).filter(id => state.answers[id].length > 0).length;
  const total = state.questions.length;
  if (answered < total) {
    const remaining = total - answered;
    if (!confirm(`${remaining} Frage(n) noch nicht beantwortet. Trotzdem abgeben?`)) return;
  }
  state.examFinished = true;
  showResults();
}

// ─── Results ──────────────────────────────────────────────────────────────────
function showResults() {
  showScreen('result-screen');
  const total = state.questions.length;
  let correct = 0;
  state.questions.forEach(q => { if (checkAnswer(q)) correct++; });
  const pct = Math.round((correct / total) * 100);

  $('result-score').textContent = `${correct} / ${total}`;
  $('result-percent').textContent = `${pct} %`;

  const ring = $('score-ring-fill');
  const circumference = 2 * Math.PI * 54;
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference * (1 - pct / 100);
  ring.style.stroke = pct >= 75 ? 'var(--brand-green)' : pct >= 50 ? 'var(--brand-orange)' : 'var(--brand-red)';

  $('result-message').textContent =
    pct >= 80 ? 'Ausgezeichnet – bestens vorbereitet!' :
    pct >= 60 ? 'Gut – noch etwas Vertiefung empfehlenswert.' :
    'Weiter üben – die Lernmodus-Funktion hilft dir!';

  // Module breakdown
  const breakdown = $('module-breakdown');
  breakdown.innerHTML = '';
  for (let m = 1; m <= 7; m++) {
    const qs = state.questions.filter(q => q.module === m);
    if (!qs.length) continue;
    const c = qs.filter(q => checkAnswer(q)).length;
    const p = Math.round((c / qs.length) * 100);
    const row = el('div', 'breakdown-row');
    row.innerHTML = `<span class="breakdown-label">Modul ${m}</span>
      <div class="breakdown-bar-wrap"><div class="breakdown-bar" style="width:${p}%;background:${p>=75?'var(--brand-green)':p>=50?'var(--brand-orange)':'var(--brand-red)'}"></div></div>
      <span class="breakdown-pct">${c}/${qs.length} (${p}%)</span>`;
    breakdown.appendChild(row);
  }
}

// ─── Details view ─────────────────────────────────────────────────────────────
function showDetails(filter) {
  showScreen('details-screen');
  const container = $('details-container');
  container.innerHTML = '';

  const qs = filter === 'wrong'
    ? state.questions.filter(q => !checkAnswer(q))
    : state.questions;

  if (!qs.length) {
    container.innerHTML = '<p class="no-errors">Keine falschen Antworten – perfekt!</p>';
    return;
  }

  qs.forEach((q, idx) => {
    const isCorrect = checkAnswer(q);
    const selected = state.answers[q.id] || [];
    const isMulti = q.answers.filter(a => a.correct).length > 1;

    const card = el('div', 'detail-card ' + (isCorrect ? 'card-correct' : 'card-wrong'));

    let qText = escapeHtml(q.question);
    if (q.negativeHighlight) {
      qText = qText.replace(/\b(NICHT|nicht|KEINE|keine|KEIN|kein)\b/g,
        '<span class="negative-highlight">$1</span>');
    }

    card.innerHTML = `
      <div class="detail-header">
        <span class="detail-num">${idx + 1}</span>
        <span class="detail-module">Modul ${q.module}</span>
        <span class="detail-status">${isCorrect ? '✓ Richtig' : '✗ Falsch'}</span>
      </div>
      ${isMulti ? '<div class="multi-hint-small">Mehrere Antworten möglich</div>' : ''}
      <p class="detail-question">${qText}</p>
      <div class="detail-answers"></div>
      <div class="detail-explanation">
        <strong>Erklärung:</strong> ${escapeHtml(q.explanation)}
        <div class="detail-ref">${escapeHtml(q.reference)}</div>
      </div>`;

    const ansContainer = card.querySelector('.detail-answers');
    q.answers.forEach(ans => {
      const ansEl = el('div', 'detail-answer');
      if (ans.correct) ansEl.classList.add('d-correct');
      else if (selected.includes(ans.id)) ansEl.classList.add('d-wrong');
      ansEl.innerHTML = `<span class="answer-badge">${ans.id}</span><span>${escapeHtml(ans.text)}</span>`;
      ansContainer.appendChild(ansEl);
    });

    container.appendChild(card);
  });
}

function backToResults() {
  showScreen('result-screen');
}

// ─── Screen management ────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showStart() {
  showScreen('start-screen');
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
