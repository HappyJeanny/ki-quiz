# Quiz – Deployment auf GitHub Pages

## Voraussetzungen

- Du bist mit dem Haupt-Repo `KI-Beauftragter` bereits bei GitHub angemeldet und verbunden.
- Der Ordner `/quiz` ist ein Unterordner dieses Repos.

---

## Schritt 1: Neues öffentliches Repo auf GitHub anlegen

1. Öffne [github.com](https://github.com) im Browser und melde dich an.
2. Klicke oben rechts auf **„+"** → **„New repository"**.
3. Fülle das Formular aus:
   - **Repository name:** `ki-quiz`
   - **Visibility:** `Public` (wichtig – nur öffentliche Repos haben kostenloses GitHub Pages)
   - **NICHTS ankreuzen** bei „Add a README", „Add .gitignore", „Choose a license"
4. Klicke auf **„Create repository"**.
5. Du siehst jetzt eine leere Seite mit der Repo-URL, z. B.:
   `https://github.com/HappyJeanny/ki-quiz.git`
   → Diese URL brauchst du in Schritt 2.

---

## Schritt 2: Quiz-Unterordner in das neue Repo pushen

Öffne in VS Code das Terminal: **`Strg + ö`** (oder Menü: Terminal → New Terminal)

Führe diesen Befehl aus – ersetze die URL durch deine aus Schritt 1:

```bash
cd /home/imader/Dokumente/KI-Beauftragter && git subtree push --prefix quiz https://github.com/HappyJeanny/ki-quiz.git main


cd /home/imader/Dokumente/KI-Beauftragter && git subtree push --prefix quiz https://github.com/HappyJeanny/ki-quiz.git main
```

- Der Befehl kann 10–30 Sekunden dauern.
- Am Ende siehst du: `To https://github.com/HappyJeanny/ki-quiz.git` und einen grünen Erfolg.
- Falls GitHub nach Benutzername/Passwort fragt: Benutzername eingeben, als Passwort ein **Personal Access Token** (nicht das GitHub-Passwort) verwenden.

---

## Schritt 3: GitHub Pages aktivieren

1. Öffne im Browser dein neues Repo: `https://github.com/HappyJeanny/ki-quiz`
2. Klicke oben auf **„Settings"** (Zahnrad-Tab).
3. Im linken Menü auf **„Pages"** klicken.
4. Unter **„Branch"** wähle:
   - Branch: **`main`**
   - Ordner: **`/ (root)`**
5. Klicke auf **„Save"**.
6. Warte ca. 1–2 Minuten. Dann erscheint oben ein grüner Banner mit der URL, z. B.:
   `https://happyjeanny.github.io/ki-quiz/`

---

## Ergebnis

Das Quiz ist jetzt öffentlich erreichbar unter:
```
https://happyjeanny.github.io/ki-quiz/
```

Die Kurs-Module bleiben im privaten Haupt-Repo und sind nicht öffentlich sichtbar.

---

## Spätere Updates (neue Fragen, Korrekturen)

Wenn du Änderungen am Quiz gemacht und im Haupt-Repo committet hast, erneut pushen:

```bash
cd /home/imader/Dokumente/KI-Beauftragter && git subtree push --prefix quiz https://github.com/HappyJeanny/ki-quiz.git main
```

GitHub Pages aktualisiert sich danach automatisch innerhalb von 1–2 Minuten.
