# Quiz – Deployment auf GitHub Pages

**Live-URL:** `https://quiz.ki-strategie.co`
**GitHub-Repo:** `https://github.com/HappyJeanny/ki-quiz`

---

## Deploy-Befehl (einziger korrekter Weg)

> ⚠️ `git subtree push` schlägt mit „fetch first" fehl – immer diesen Befehl verwenden:

```bash
cd /home/imader/Dokumente/KI-Beauftragter && git add quiz/ && git commit -m "Quiz: kurze Beschreibung der Änderung" && git subtree split --prefix=quiz -b quiz-tmp && git push https://HappyJeanny:TOKEN@github.com/HappyJeanny/ki-quiz.git quiz-tmp:main --force && git branch -D quiz-tmp
```

`TOKEN` = Personal Access Token (repo-Scope). GitHub Pages aktualisiert sich danach automatisch innerhalb von 1–2 Minuten.

---

## Voraussetzungen (einmalig einrichten)

- GitHub-Repo `ki-quiz` angelegt (öffentlich)
- GitHub Pages: Settings → Pages → Branch: `main`, Folder: `/ (root)`, Custom domain: `quiz.ki-strategie.co`
- Cloudflare DNS: CNAME `quiz` → `happyjeanny.github.io` (proxied)
- `quiz/CNAME`-Datei mit Inhalt `quiz.ki-strategie.co` im Ordner vorhanden ✅

> ⚠️ Die `CNAME`-Datei muss im Ordner liegen – sonst verliert GitHub Pages die Custom-Domain nach jedem Force-Push.

---

## Spätere Updates

Änderungen committen, dann denselben Deploy-Befehl erneut ausführen.
