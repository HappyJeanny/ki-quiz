var QUESTIONS = [
// ─── MODUL 1 – Kommunikation & Prompting ────────────────────────────────────
{id:1,module:1,type:1,question:"Wie funktionieren Large Language Models (LLMs) grundlegend?",
answers:[
{id:"A",text:"Sie greifen auf eine gespeicherte Faktendatenbank zu und geben gespeicherte Antworten aus.",correct:false},
{id:"B",text:"Sie simulieren menschliches Denken durch neuronale Netzwerke, die logisch schlussfolgern.",correct:false},
{id:"C",text:"Sie berechnen Wahrscheinlichkeiten für das nächste Wort auf Basis statistischer Muster aus Trainingsdaten.",correct:true},
{id:"D",text:"Sie durchsuchen das Internet in Echtzeit und fassen die Ergebnisse zusammen.",correct:false}],
explanation:"LLMs generieren Text, indem sie statistisch das wahrscheinlichste nächste Wort berechnen – sie speichern keine Fakten und haben keinen Internetzugriff (sofern kein Tool angebunden ist). Das macht sie anfällig für Halluzinationen.",
reference:"Modul 1 – Kommunikation & Prompting"},

// ─── MODUL 2 – Rechtliche Grundlagen ────────────────────────────────────────
{id:15,module:2,type:3,question:"Muster GmbH setzt SmartHire ein. Welche Betreiberpflicht nach Art. 26 EU AI Act ist vor dem Einsatz zu erfüllen?",
answers:[
{id:"A",text:"Die Muster GmbH muss eine Konformitätserklärung nach Art. 47 ausstellen.",correct:false},
{id:"B",text:"Die Muster GmbH muss das System in der EU-KI-Datenbank registrieren.",correct:false},
{id:"C",text:"Die Muster GmbH muss Arbeitnehmer vor dem Einsatz von KI informieren, die sie betrifft (Art. 26 Abs. 7).",correct:true},
{id:"D",text:"Die Muster GmbH muss eine technische Dokumentation nach Anhang IV erstellen.",correct:false}],
explanation:"Konformitätserklärung (A) und Registrierung (B) sowie technische Dokumentation (D) sind Anbieterpflichten. Art. 26 Abs. 7 verpflichtet den Betreiber, betroffene Arbeitnehmer vor dem Einsatz zu informieren – das schließt die HR-Mitarbeitenden ein, die mit SmartHire arbeiten.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

// ─── MODUL 3 – Risikomanagement ──────────────────────────────────────────────
{id:25,module:3,type:3,question:"Bei SmartHire wird festgestellt, dass das System über Monate hinweg Bewerberinnen mit Elternzeitpausen im CV niedrig bewertet. Das Problem wurde erst durch eine Beschwerde entdeckt – kein Monitoring war aktiv. Welcher typische Fehler bei der Risikobewertung liegt vor?",
answers:[
{id:"A",text:"Statische Bewertung ohne Monitoring – das Risiko wurde einmalig bewertet, aber nicht kontinuierlich überwacht.",correct:true},
{id:"B",text:"Fehlende Risikomatrix – ohne E×S-Bewertung wurde das Risiko unterschätzt.",correct:false},
{id:"C",text:"Falscher Risikoinhaber – die falsche Person war für das Risiko verantwortlich.",correct:false},
{id:"D",text:"Zu hohe Risikoakzeptanz – der Schwellenwert wurde zu großzügig gesetzt.",correct:false}],
explanation:"Das Szenario beschreibt fehlende laufende Überwachung. EU AI Act Art. 9 und ISO 42001 fordern explizit kontinuierliches Monitoring – ein Risiko, das sich über Zeit entwickelt, muss laufend beobachtet werden.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

// ─── MODUL 5 – Daten- & Change-Management ───────────────────────────────────
{id:49,module:5,type:3,question:"Beim SmartHire-Piloten zeigt sich, dass das System bei französischen und polnischen Namen deutlich schlechtere Performance hat. Was ist die Ursache und welche Maßnahme ist erforderlich?",
answers:[
{id:"A",text:"Das ist ein Software-Bug, der durch ein Update behoben werden muss.",correct:false},
{id:"B",text:"Die Trainingsdaten waren nicht repräsentativ für alle relevanten Bevölkerungsgruppen. Für die internationale Skalierung sind neue, repräsentative Trainingsdaten für die Zielmärkte erforderlich (EU AI Act Art. 10, ISO 42001 A.7.4).",correct:true},
{id:"C",text:"Das Problem liegt in der Übersetzung – das System muss auf Englisch umgestellt werden.",correct:false},
{id:"D",text:"Das System muss für ausländische Namen deaktiviert werden.",correct:false}],
explanation:"EU AI Act Art. 10(3) fordert, dass Trainingsdaten repräsentativ für den Anwendungsbereich sind. Bei internationaler Skalierung gehören auch die Zielgruppen der neuen Märkte dazu. Neue Trainingsdaten und ggf. eine neue DSFA sind erforderlich.",
reference:"Modul 5 – Daten- & Change-Management"},

// ─── MODUL 7 – EU AI Act ─────────────────────────────────────────────────────
{id:70,module:7,type:3,question:"SmartHire analysiert Profilfotos von Bewerbern, um deren emotionalen Zustand einzuschätzen und das Ranking zu beeinflussen. Wie ist das nach EU AI Act zu beurteilen?",
answers:[
{id:"A",text:"Ja, verboten – Art. 5 Abs. 1 lit. f verbietet KI-Systeme zur Emotionserkennung im Beschäftigungskontext. Das ist eine verbotene Praktik ohne Ausnahmemöglichkeit.",correct:true},
{id:"B",text:"Nein, zulässig – Emotionserkennung ist nur verboten, wenn sie für Kreditentscheidungen genutzt wird.",correct:false},
{id:"C",text:"Nein, zulässig – sofern die Bewerber informiert werden, ist Emotionserkennung im Bewerbungsprozess erlaubt.",correct:false},
{id:"D",text:"Ja, verboten – aber nur, wenn die Analyse zu einem Nachteil für mehr als 10 % der Bewerber führt.",correct:false}],
explanation:"Art. 5 Abs. 1 lit. f verbietet KI-Systeme zur Emotionserkennung am Arbeitsplatz und bei Bildungseinrichtungen explizit und absolut. Informierte Einwilligung ändert daran nichts – das Verbot gilt unabhängig von Zustimmung oder Ergebnisquote.",
reference:"Modul 7 – EU AI Act"},
];
