# Quiz ein- und ausschalten

## Wo die Einstellung ist

Datei: `quiz/index.html`  
Suche nach dieser Zeile (ganz unten, kurz vor dem `</body>`-Tag):

```html
<script>var QUIZ_ENABLED = false;</script>
```

---

## Quiz ausschalten

Wert auf `false` setzen:

```html
<script>var QUIZ_ENABLED = false;</script>
```

**Ergebnis:** Besucher sehen eine Meldung „Quiz momentan nicht verfügbar" mit einem Link zur Demo-Version.  
Die Demo unter `/demo/` läuft davon unabhängig weiter.

---

## Quiz einschalten

Wert auf `true` setzen:

```html
<script>var QUIZ_ENABLED = true;</script>
```

**Ergebnis:** Das vollständige Quiz ist wieder zugänglich.

---

## Schritt-für-Schritt in VS Code

1. Datei `quiz/index.html` öffnen
2. Mit **Strg + F** nach `QUIZ_ENABLED` suchen
3. `false` → `true` oder `true` → `false` ändern
4. Speichern (**Strg + S**)
5. Im Terminal committen und deployen:

```bash
cd /home/imader/Dokumente/KI-Beauftragter
git add quiz/index.html
git commit -m "Quiz eingeschaltet"
git subtree push --prefix quiz https://github.com/HappyJeanny/ki-quiz.git main
```

GitHub Pages aktualisiert sich danach automatisch innerhalb von 1–2 Minuten.

---

## Übersicht

| `QUIZ_ENABLED` | Vollquiz (`/`) | Demo (`/demo/`) |
|---|---|---|
| `true` | ✅ erreichbar | ✅ erreichbar |
| `false` | ⏸ Offline-Seite | ✅ erreichbar |
