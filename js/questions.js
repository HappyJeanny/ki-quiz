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

{id:2,module:1,type:4,negativeHighlight:true,question:"Welche Aussage zur R-A-K-F-Methode ist NICHT korrekt?",
answers:[
{id:"A",text:"Das „R“ steht für Rolle – die KI erhält eine klar definierte Perspektive oder Funktion.",correct:false},
{id:"B",text:"Das „F“ steht für Fakten – alle relevanten Hintergrundinformationen werden als Fakten bezeichnet.",correct:true},
{id:"C",text:"Das „A“ steht für Aufgabe – der Kern des Prompts mit dem konkreten Auftrag.",correct:false},
{id:"D",text:"Das „K“ steht für Kontext – relevante Rahmenbedingungen, die die Antwort präzisieren.",correct:false}],
explanation:"In der R-A-K-F-Methode steht F für Format (z. B. Tabelle, Liste, Fließtext) – nicht für Fakten. Fakten sind Teil des Kontexts (K).",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:3,module:1,type:3,question:"SmartHire vergibt systematisch niedrigere Scores für Bewerberinnen. Bei der Ursachenforschung zeigt sich, dass die KI überzeugend klingende, aber falsch begründete Scores produziert. Wie bezeichnet man dieses Phänomen?",
answers:[
{id:"A",text:"Halluzination – die KI generiert plausibel klingende, aber sachlich falsche Ausgaben.",correct:true},
{id:"B",text:"Bias – die KI diskriminiert systematisch aufgrund von Merkmalen wie Geschlecht.",correct:false},
{id:"C",text:"Overfitting – das Modell hat sich zu stark auf Trainingsdaten spezialisiert.",correct:false},
{id:"D",text:"Prompt-Injection – externe Eingaben manipulieren das Modell gezielt.",correct:false}],
explanation:"Halluzinationen sind Ausgaben, die plausibel klingen, aber inhaltlich falsch sind. Bias ist ein separates Problem (systematische Diskriminierung). Das Szenario beschreibt falsch begründete Ausgaben – das ist Halluzination.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:4,module:1,type:2,question:"Welche der folgenden Aussagen über Few-Shot-Prompting ist vollständig korrekt?",
answers:[
{id:"A",text:"Few-Shot-Prompting liefert konsistenteres Format als Zero-Shot, da die Beispiele das Ausgabeformat vorgeben, und ist daher für alle KI-Aufgaben besser geeignet.",correct:false},
{id:"B",text:"Few-Shot-Prompting eignet sich für die Massenverarbeitung von CVs, sofern die Beispiele echte Bewerberdaten enthalten, um realistische Ergebnisse zu erzielen.",correct:false},
{id:"C",text:"Few-Shot-Prompting reduziert Halluzinationen vollständig, weil das Modell durch die Beispiele auf Fakten eingeschränkt wird.",correct:false},
{id:"D",text:"Few-Shot-Prompting gibt 2–3 Beispiele im Prompt mit und erzwingt dadurch konsistentes Format – für Bewerberdaten müssen die Beispiele anonymisiert sein (DSGVO Art. 5).",correct:true}],
explanation:"Antwort A ist falsch: Zero-Shot reicht für viele Aufgaben. B ist falsch: Beispiele dürfen keine echten Personendaten enthalten (DSGVO Art. 5 Datenminimierung). C ist falsch: Few-Shot reduziert nicht alle Halluzinationen. D ist vollständig korrekt.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:5,module:1,type:1,question:"Was ist der Hauptvorteil von Chain-of-Thought (CoT) Prompting?",
answers:[
{id:"A",text:"Es erhöht die Verarbeitungsgeschwindigkeit, da das Modell direkte Antworten liefert.",correct:false},
{id:"B",text:"Es garantiert vollständige Reproduzierbarkeit der Ergebnisse bei gleicher Eingabe.",correct:false},
{id:"C",text:"Das Modell kann Denkfehler in den Zwischenschritten selbst erkennen, was Begründungsqualität verbessert und Halluzinationen bei komplexen Aufgaben reduziert.",correct:true},
{id:"D",text:"Es eliminiert die Notwendigkeit von Beispielen im Prompt vollständig.",correct:false}],
explanation:"Chain-of-Thought lässt das Modell Schritt für Schritt denken. Dadurch werden Zwischenschritte sichtbar, und das Modell kann eigene Denkfehler korrigieren. Es erhöht nicht die Geschwindigkeit und garantiert keine Reproduzierbarkeit.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:6,module:1,type:3,question:"Sie müssen täglich 200 CVs mit SmartHire bewerten. Die Ergebnisse sollen in einem einheitlichen Format (Tabelle mit Score + Begründung) für HR nutzbar sein. Welche Prompting-Methode ist am besten geeignet?",
answers:[
{id:"A",text:"Zero-Shot-Prompting – schnell und ausreichend für Massenverarbeitung.",correct:false},
{id:"B",text:"Few-Shot-Prompting – Beispiel-Bewertungen (anonymisiert!) geben das Format vor und sorgen für konsistente Ausgaben bei der Massenverarbeitung.",correct:true},
{id:"C",text:"Self-Consistency-Prompting – jede CV dreimal bewerten und den Mehrheitsentscheid nehmen.",correct:false},
{id:"D",text:"Chain-of-Thought-Prompting – Schritt-für-Schritt-Bewertung für maximale Qualität.",correct:false}],
explanation:"Few-Shot ist ideal für Massenverarbeitung, wenn ein einheitliches Format benötigt wird. Zero-Shot liefert inkonsistente Formate. Self-Consistency ist zu aufwändig für 200 CVs. CoT eignet sich für Grenzfälle, nicht für effiziente Massenverarbeitung.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:7,module:1,type:1,question:"Was bedeutet es, dass LLM-Ausgaben nicht-deterministisch sind?",
answers:[
{id:"A",text:"Das Modell liefert immer zufällige Antworten ohne Zusammenhang zur Eingabe.",correct:false},
{id:"B",text:"Das Modell kann nicht für compliance-relevante Aufgaben eingesetzt werden.",correct:false},
{id:"C",text:"Dieselbe Eingabe führt immer zu identischen Ausgaben, wenn die Temperatur auf 0 gesetzt wird.",correct:false},
{id:"D",text:"Dieselbe Eingabe kann bei verschiedenen Aufrufen unterschiedliche Ausgaben produzieren, was vollständige Reproduzierbarkeit strukturell nicht garantierbar macht.",correct:true}],
explanation:"Nicht-Deterministik bedeutet, dass LLMs bei gleicher Eingabe unterschiedliche Ergebnisse liefern können. Auch bei Temperatur 0 ist dies nicht vollständig auszuschließen. Das hat rechtliche Konsequenzen (z. B. Anfechtbarkeit von Bewerbungsabsagen).",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:8,module:1,type:4,negativeHighlight:true,question:"Welche Aussage zum Self-Consistency-Prompting ist NICHT korrekt?",
answers:[
{id:"A",text:"Self-Consistency-Prompting ist die effizienteste Methode für die tägliche Massenverarbeitung von Bewerbungsunterlagen.",correct:true},
{id:"B",text:"Es basiert auf mehrfacher Ausführung desselben Prompts und Mehrheitsentscheid.",correct:false},
{id:"C",text:"Es ist besonders wertvoll bei sicherheitskritischen Entscheidungen, wo eine niedrige Fehlerrate entscheidend ist.",correct:false},
{id:"D",text:"Es macht die Nicht-Determinismus-Eigenschaft von LLMs gezielt nutzbar.",correct:false}],
explanation:"Self-Consistency ist aufwändig (jeder Prompt wird mehrfach ausgeführt) und daher nicht effizient für Massenverarbeitung. Es eignet sich für sicherheitskritische Einzelentscheidungen, nicht für 200 CVs täglich.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:9,module:1,type:2,question:"Welche Aussage zur Reproduzierbarkeit bei KI-Prompting ist vollständig korrekt?",
answers:[
{id:"A",text:"Reproduzierbarkeit ist bei LLMs durch Logging vollständig sichergestellt, da alle Eingaben und Ausgaben dokumentiert werden.",correct:false},
{id:"B",text:"Vollständige Reproduzierbarkeit ist durch Festlegen der Temperatur auf 0 garantierbar, weshalb rechtliche Bedenken unbegründet sind.",correct:false},
{id:"C",text:"Vollständige Reproduzierbarkeit ist strukturell nicht garantierbar und hat rechtliche Konsequenzen – z. B. bei der Anfechtung von Bewerbungsabsagen durch diskriminierte Bewerber.",correct:true},
{id:"D",text:"Reproduzierbarkeit ist irrelevant, solange das System durchschnittlich korrekte Ergebnisse liefert.",correct:false}],
explanation:"Logging dokumentiert, was gesagt wurde – garantiert aber keine identische Reproduzierbarkeit zukünftiger Ausgaben. Temperatur 0 reduziert, eliminiert aber nicht den Nicht-Determinismus. Rechtliche Konsequenzen bestehen (Anfechtbarkeit).",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:10,module:1,type:1,question:"Was sind Merkmale eines starken Prompts? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Er ist möglichst kurz, um die KI nicht zu überlasten.",correct:false},
{id:"B",text:"Er ist spezifisch und enthält präzise Anweisungen.",correct:true},
{id:"C",text:"Er lässt bewusst Interpretationsspielraum, um kreative Antworten zu fördern.",correct:false},
{id:"D",text:"Er ist transparent – die Logik der Anforderung ist nachvollziehbar.",correct:true}],
explanation:"Starke Prompts sind spezifisch (präzise Anweisung), konsistent (vergleichbare Ergebnisse) und transparent (nachvollziehbare Logik). Kürze allein ist kein Merkmal – oft braucht ein guter Prompt Kontext und Beispiele.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:11,module:1,type:3,question:"SmartHire lehnt eine qualifizierte Bewerberin ab. Auf Anfrage kann HR die Entscheidungslogik nicht erklären. Welche Anforderung wird primär verletzt?",
answers:[
{id:"A",text:"Art. 5 EU AI Act – Verbotene KI-Praktiken, da die Entscheidung diskriminierend war.",correct:false},
{id:"B",text:"Art. 13 DSGVO i. V. m. Art. 86 EU AI Act – Transparenz über KI-Logik und Recht auf Erklärung.",correct:true},
{id:"C",text:"Art. 26 EU AI Act – Betreiber hat keine ausreichende menschliche Aufsicht sichergestellt.",correct:false},
{id:"D",text:"Art. 9 EU AI Act – Risikomanagementsystem des Anbieters fehlt.",correct:false}],
explanation:"Das Recht auf Erklärung der KI-Logik ergibt sich aus Art. 13 DSGVO (Informationspflicht über automatisierte Entscheidungen) i. V. m. Art. 86 EU AI Act. Art. 26 betrifft die menschliche Aufsicht, Art. 9 das Risikomanagement des Anbieters.",
reference:"Modul 1 – Kommunikation & Prompting"},

// ─── MODUL 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten ─────────────
{id:12,module:2,type:1,question:"Ist die Rolle 'KI-Beauftragte:r' im EU AI Act als Pflichtrolle definiert?",
answers:[
{id:"A",text:"Nein – der EU AI Act nennt die Rolle nicht namentlich. Art. 26 schreibt aber Betreiberpflichten vor, die jemand operativ erfüllen muss.",correct:true},
{id:"B",text:"Ja – Art. 16 EU AI Act schreibt einen KI-Beauftragten für alle Betreiber von Hochrisiko-KI vor.",correct:false},
{id:"C",text:"Ja – analog zum Datenschutzbeauftragten ist der KI-Beauftragte ab 50 Mitarbeitern Pflicht.",correct:false},
{id:"D",text:"Nein – die Rolle ist rein freiwillig und hat keine rechtliche Grundlage.",correct:false}],
explanation:"Der EU AI Act kennt keinen 'KI-Beauftragten' als Pflichtfunktion (anders als DSGVO den DSB). Art. 26 definiert Betreiberpflichten, die organisatorisch verankert werden müssen – typischerweise durch einen KI-Beauftragten, ohne diesen explizit zu fordern.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:13,module:2,type:3,question:"Über welche zwei Wege wird ein KI-System nach EU AI Act Art. 6 als Hochrisiko eingestuft? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Das System wird in einem EU-Mitgliedstaat entwickelt und verarbeitet personenbezogene Daten.",correct:false},
{id:"B",text:"Das KI-System ist in ein reguliertes Produkt eingebettet, das bereits einer externen Konformitätsprüfung unterliegt (Art. 6 Abs. 1).",correct:true},
{id:"C",text:"Das KI-System steht in einer der 8 Kategorien des Anhangs III (Art. 6 Abs. 2).",correct:true},
{id:"D",text:"Das System überschreitet die Rechenkapazität von 10²⁵ FLOP und gilt damit als GPAI mit systemischem Risiko.",correct:false}],
explanation:"Die zwei Wege sind: (1) KI als Sicherheitsbauteil in reguliertem Produkt (Art. 6 Abs. 1) und (2) direkte Listung in Anhang III (Art. 6 Abs. 2). SmartHire fällt unter Weg 2, Anhang III Nr. 4a (Personalauswahl).",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:14,module:2,type:4,negativeHighlight:true,question:"Welche der folgenden Aussagen zur Hochrisiko-Einstufung von SmartHire ist NICHT korrekt?",
answers:[
{id:"A",text:"SmartHire ist Hochrisiko-KI, weil Personalauswahl in Anhang III Nr. 4a explizit gelistet ist.",correct:false},
{id:"B",text:"Für SmartHire als Hochrisiko-KI gelten die Anforderungen Art. 9–15 (Anbieter) und Art. 26 (Betreiber).",correct:false},
{id:"C",text:"Die Hochrisiko-Einstufung bedeutet, dass strenge Anforderungen an Risikomanagement, Dokumentation und Konformitätsbewertung gelten.",correct:false},
{id:"D",text:"SmartHire fällt unter Art. 6 Abs. 1, weil es in ein reguliertes Sicherheitsprodukt eingebettet ist.",correct:true}],
explanation:"SmartHire ist ein eigenständiges HR-System und kein Sicherheitsbauteil in einem regulierten Produkt. Die Einstufung erfolgt über Art. 6 Abs. 2 i. V. m. Anhang III Nr. 4a (Personalauswahl, Kündigung, Arbeitsbedingungen).",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:15,module:2,type:3,question:"Muster GmbH setzt SmartHire ein. Welche Betreiberpflicht nach Art. 26 EU AI Act ist vor dem Einsatz zu erfüllen?",
answers:[
{id:"A",text:"Die Muster GmbH muss eine Konformitätserklärung nach Art. 47 ausstellen.",correct:false},
{id:"B",text:"Die Muster GmbH muss das System in der EU-KI-Datenbank registrieren.",correct:false},
{id:"C",text:"Die Muster GmbH muss Arbeitnehmer vor dem Einsatz von KI informieren, die sie betrifft (Art. 26 Abs. 7).",correct:true},
{id:"D",text:"Die Muster GmbH muss eine technische Dokumentation nach Anhang IV erstellen.",correct:false}],
explanation:"Konformitätserklärung (A) und Registrierung (B) sowie technische Dokumentation (D) sind Anbieterpflichten. Art. 26 Abs. 7 verpflichtet den Betreiber, betroffene Arbeitnehmer vor dem Einsatz zu informieren – das schließt die HR-Mitarbeitenden ein, die mit SmartHire arbeiten.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:16,module:2,type:2,question:"Welche Aussage zu DSGVO Art. 22 und SmartHire ist vollständig korrekt?",
answers:[
{id:"A",text:"Art. 22 DSGVO verbietet rein automatisierte Entscheidungen mit rechtlicher Wirkung – SmartHire darf deshalb nur Rankings erstellen; die finale Einstellungsentscheidung muss ein Mensch treffen.",correct:true},
{id:"B",text:"Art. 22 DSGVO verbietet jede Nutzung von KI bei Bewerbungsverfahren, weil Bewerber grundsätzlich das Recht haben, nur von Menschen bewertet zu werden.",correct:false},
{id:"C",text:"Art. 22 DSGVO ist auf SmartHire nicht anwendbar, weil das System nur unterstützend wirkt und keine rechtliche Entscheidung trifft.",correct:false},
{id:"D",text:"Art. 22 DSGVO schreibt vor, dass automatisierte Entscheidungen zulässig sind, sofern die Bewerber zugestimmt haben, und SmartHire darf dann allein entscheiden.",correct:false}],
explanation:"Art. 22 verbietet 'ausschließlich automatisierte' Entscheidungen mit rechtlicher Wirkung. Die Lösung ist Human-in-the-Loop: SmartHire erstellt das Ranking, HR trifft die finale Entscheidung aktiv. Art. 22 verbietet nicht KI-Unterstützung generell.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:17,module:2,type:1,question:"Welche Frist gilt nach DSGVO Art. 33 für die Meldung einer Datenpanne an die zuständige Aufsichtsbehörde?",
answers:[
{id:"A",text:"24 Stunden, wenn personenbezogene Daten betroffen sind.",correct:false},
{id:"B",text:"7 Tage, sofern keine schwerwiegenden Schäden für Betroffene drohen.",correct:false},
{id:"C",text:"30 Tage nach Entdeckung des Vorfalls.",correct:false},
{id:"D",text:"72 Stunden nach Bekanntwerden der Panne, sofern ein Risiko für Betroffene besteht.",correct:true}],
explanation:"DSGVO Art. 33 schreibt eine Meldefrist von 72 Stunden an die Datenschutzbehörde vor. Diese Frist beginnt mit Bekanntwerden der Panne. Bei einer Hochrisiko-KI wie SmartHire kann zusätzlich EU AI Act Art. 73 relevant sein (15 Tage bei Diskriminierung).",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:18,module:2,type:3,question:"Eine Bewerberin möchte wissen, welche ihrer Daten SmartHire verarbeitet hat und nach welcher Logik ihr Score berechnet wurde. Welche Rechtsgrundlage schützt dieses Recht vollständig?",
answers:[
{id:"A",text:"Nur DSGVO Art. 15 (Auskunftsrecht) – das Recht auf Erklärung der KI-Logik besteht nicht.",correct:false},
{id:"B",text:"DSGVO Art. 15 (Auskunftsrecht) UND Art. 86 EU AI Act (Recht auf Erklärung der KI-Entscheidungslogik) – beide gelten parallel.",correct:true},
{id:"C",text:"Nur EU AI Act Art. 86 – die DSGVO ist bei KI-Systemen nicht mehr anwendbar.",correct:false},
{id:"D",text:"Grundgesetz Art. 1 (Menschenwürde) – konkrete Datenschutzrechte bestehen nicht.",correct:false}],
explanation:"Es gilt doppelte Transparenzpflicht: DSGVO Art. 15 gibt das Recht auf Auskunft über gespeicherte Daten; Art. 86 EU AI Act ergänzt das Recht auf Erklärung der KI-Entscheidungslogik. Beide Rechte gelten parallel.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:19,module:2,type:1,question:"Was ist eine Datenschutz-Folgenabschätzung (DSFA) nach DSGVO Art. 35 und wann ist sie bei SmartHire erforderlich?",
answers:[
{id:"A",text:"Eine DSFA ist ein freiwilliges Qualitätsinstrument und bei SmartHire empfehlenswert, aber nicht verpflichtend.",correct:false},
{id:"B",text:"Eine DSFA ist nur erforderlich, wenn das System personenbezogene Daten in Drittstaaten überträgt.",correct:false},
{id:"C",text:"Eine DSFA ist bei SmartHire verpflichtend, weil Hochrisiko-KI in der Praxis fast immer eine systematische Verarbeitung mit hohem Risiko für Betroffene darstellt.",correct:true},
{id:"D",text:"Eine DSFA ist nur Pflicht, wenn der Datenschutzbeauftragte sie anordnet.",correct:false}],
explanation:"DSGVO Art. 35 verlangt eine DSFA bei systematischer Verarbeitung mit hohem Risiko für Betroffene. Hochrisiko-KI nach EU AI Act erfüllt dieses Kriterium fast immer. Art. 26 Abs. 9 EU AI Act verpflichtet den Anbieter zusätzlich, dem Betreiber die nötigen Informationen für die DSFA bereitzustellen.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:20,module:2,type:4,negativeHighlight:true,question:"Welche der folgenden Aussagen zu den 7 DSGVO-Grundsätzen (Art. 5) ist NICHT korrekt?",
answers:[
{id:"A",text:"Der Grundsatz der Speicherbegrenzung erlaubt es, Bewerberdaten unbegrenzt zu speichern, solange sie für zukünftige Stellen relevant sein könnten.",correct:true},
{id:"B",text:"Der Grundsatz der Zweckbindung verbietet es, Bewerberdaten für andere Zwecke als die ursprüngliche Stelle zu nutzen.",correct:false},
{id:"C",text:"Der Grundsatz der Datenminimierung bedeutet, dass nur die Daten erhoben werden, die für das Bewerbungsverfahren wirklich nötig sind.",correct:false},
{id:"D",text:"Der Grundsatz der Integrität und Vertraulichkeit fordert technische und organisatorische Maßnahmen zum Schutz der Daten.",correct:false}],
explanation:"Speicherbegrenzung (Art. 5 Abs. 1e) bedeutet, dass Daten nicht länger als nötig gespeichert werden dürfen. Bewerberdaten müssen nach Abschluss des Verfahrens gelöscht werden – in der Praxis maximal 6 Monate. Eine unbegrenzte Speicherung für 'zukünftige Stellen' ist ohne erneute Einwilligung unzulässig.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:21,module:2,type:2,question:"Welche Aussage zur Haftung bei DSGVO-Verstößen ist vollständig korrekt?",
answers:[
{id:"A",text:"Nur der Verantwortliche haftet bei DSGVO-Verstößen; Auftragsverarbeiter sind rechtlich nicht haftbar, solange sie im Auftrag handeln.",correct:false},
{id:"B",text:"Bei DSGVO-Verstößen drohen Bußgelder bis zu 20 Mio. EUR oder 4 % des globalen Jahresumsatzes – je niedriger – um kleinere Unternehmen zu schützen.",correct:false},
{id:"C",text:"Die Haftung nach DSGVO gilt nur für materielle Schäden; immaterielle Schäden wie psychische Belastung sind nicht erstattungsfähig.",correct:false},
{id:"D",text:"Bei DSGVO-Verstößen drohen Bußgelder bis zu 20 Mio. EUR oder 4 % des globalen Jahresumsatzes – je höher – und Betroffene haben Anspruch auf Schadensersatz für materielle UND immaterielle Schäden (Art. 82).",correct:true}],
explanation:"Das Bußgeld richtet sich nach dem höheren Betrag (je höher), nicht dem niedrigeren. Auftragsverarbeiter können unter bestimmten Umständen ebenfalls haften (Art. 82 Abs. 2). Art. 82 DSGVO umfasst ausdrücklich auch immaterielle Schäden.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:22,module:2,type:3,question:"SmartHire nutzt Ollama (Meta Llama-Modell), das lokal auf Servern der Muster GmbH betrieben wird. Muss ein Auftragsverarbeitungsvertrag (AVV) nach DSGVO Art. 28 mit Meta abgeschlossen werden?",
answers:[
{id:"A",text:"Ja – immer wenn ein KI-Modell von einem Drittanbieter stammt, ist ein AVV erforderlich.",correct:false},
{id:"B",text:"Nein – bei lokaler Installation verarbeitet Meta keine Daten der Muster GmbH. Ein AVV ist nicht erforderlich, aber eine DSFA (Art. 35 DSGVO) bleibt Pflicht.",correct:true},
{id:"C",text:"Nein – Ollama ist Open Source, daher sind keine datenschutzrechtlichen Vereinbarungen nötig.",correct:false},
{id:"D",text:"Ja – auch bei lokaler Installation ist Meta als Modellentwickler Auftragsverarbeiter.",correct:false}],
explanation:"Ein AVV ist nur nötig, wenn ein Dritter tatsächlich Daten im Auftrag verarbeitet. Bei lokaler Installation (on-premise) verarbeitet Meta keine Daten der Muster GmbH. Allerdings ist weiterhin eine DSFA wegen der Hochrisiko-Verarbeitung erforderlich.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

{id:23,module:2,type:1,question:"Welche Informationspflicht gilt nach DSGVO Art. 13 Abs. 2 lit. f bei KI-gestützter Bewerbungsauswahl?",
answers:[
{id:"A",text:"Bewerber müssen über die Namen aller Mitarbeitenden informiert werden, die ihre Bewerbung lesen.",correct:false},
{id:"B",text:"Bewerber haben Anspruch auf Einsicht in den vollständigen Quellcode des KI-Systems.",correct:false},
{id:"C",text:"Bewerber müssen über die Einbeziehung automatisierter Entscheidungsfindung sowie die Logik und die erwarteten Auswirkungen dieser Verarbeitung informiert werden.",correct:true},
{id:"D",text:"Bewerber müssen aktiv einwilligen, bevor ihre Daten mit KI verarbeitet werden dürfen.",correct:false}],
explanation:"Art. 13 Abs. 2 lit. f schreibt vor, Betroffene über 'das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling sowie aussagekräftige Informationen über die involvierte Logik' zu informieren. Das bedeutet: In der Stellenausschreibung oder Datenschutzerklärung muss SmartHire erwähnt werden.",
reference:"Modul 2 – Rechtliche Grundlagen & Rolle des KI-Beauftragten"},

// ─── MODUL 3 – Risikomanagement & Datenschutz ───────────────────────────────
{id:24,module:3,type:1,question:"Wie berechnet sich der Risikoscore (R) nach der Definition des EU AI Act Art. 3 Nr. 2?",
answers:[
{id:"A",text:"R = Schwere + Eintrittswahrscheinlichkeit (additive Formel)",correct:false},
{id:"B",text:"R = (Schwere + Eintrittswahrscheinlichkeit) / 2 (Durchschnitt)",correct:false},
{id:"C",text:"R = Schwere / Eintrittswahrscheinlichkeit (Quotient)",correct:false},
{id:"D",text:"R = Eintrittswahrscheinlichkeit × Schwere (multiplikative Formel – je höher beide Faktoren, desto kritischer)",correct:true}],
explanation:"EU AI Act Art. 3 Nr. 2 definiert Risiko als Kombination aus Wahrscheinlichkeit und Schwere. Die Formel lautet: E × S = R-Score. Bei SmartHire: Bias-Risiko E=3 × S=5 = R=15 (Hochrisiko).",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:25,module:3,type:3,question:"Bei SmartHire wird festgestellt, dass das System über Monate hinweg Bewerberinnen mit Elternzeitpausen im CV niedrig bewertet. Das Problem wurde erst durch eine Beschwerde entdeckt – kein Monitoring war aktiv. Welcher typische Fehler bei der Risikobewertung liegt vor?",
answers:[
{id:"A",text:"Statische Bewertung ohne Monitoring – das Risiko wurde einmalig bewertet, aber nicht kontinuierlich überwacht.",correct:true},
{id:"B",text:"Fehlende Risikomatrix – ohne E×S-Bewertung wurde das Risiko unterschätzt.",correct:false},
{id:"C",text:"Falscher Risikoinhaber – die falsche Person war für das Risiko verantwortlich.",correct:false},
{id:"D",text:"Zu hohe Risikoakzeptanz – der Schwellenwert wurde zu großzügig gesetzt.",correct:false}],
explanation:"Das Szenario beschreibt fehlende laufende Überwachung. EU AI Act Art. 9 und ISO 42001 fordern explizit kontinuierliches Monitoring – ein Risiko, das sich über Zeit entwickelt, muss laufend beobachtet werden.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:26,module:3,type:4,negativeHighlight:true,question:"Welche Aussage zu den drei Risikoarten bei KI-Systemen ist NICHT korrekt?",
answers:[
{id:"A",text:"Bias-Risiken umfassen systematische Diskriminierung und lösen bei Hochrisiko-KI eine Meldepflicht nach EU AI Act Art. 73 aus (15 Tage bei Diskriminierung).",correct:false},
{id:"B",text:"Technische Risiken wie Datenpannen unterliegen der DSGVO-Meldepflicht nach Art. 33 (72 Stunden).",correct:false},
{id:"C",text:"Ethische Risiken (z. B. Intransparenz) haben keine rechtliche Grundlage und sind daher bei der Risikobewertung nur informell zu dokumentieren.",correct:true},
{id:"D",text:"Wenn ein Bias durch einen Datenhack entstand, können DSGVO Art. 33 UND EU AI Act Art. 73 gleichzeitig greifen (doppelte Meldepflicht).",correct:false}],
explanation:"Ethische Risiken wie Intransparenz haben eine direkte rechtliche Grundlage: z. B. Art. 22 DSGVO (Verbot rein automatisierter Entscheidungen ohne Erklärung) und Art. 13 DSGVO (Informationspflicht). Sie müssen formal bewertet werden.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:27,module:3,type:2,question:"Welche Aussage zum Risikomanagementsystem nach EU AI Act Art. 9 ist vollständig korrekt?",
answers:[
{id:"A",text:"Art. 9 fordert ein Risikomanagementsystem, das einmalig vor Inverkehrbringen erstellt und danach archiviert wird.",correct:false},
{id:"B",text:"Art. 9 fordert einen kontinuierlichen, iterativen Prozess über den gesamten KI-Lebenszyklus – Risikoidentifikation, -bewertung, -minderung und laufende Überwachung.",correct:true},
{id:"C",text:"Art. 9 gilt für Betreiber und Anbieter gleichermaßen und verpflichtet beide zur identischen Dokumentation.",correct:false},
{id:"D",text:"Art. 9 verlangt ausschließlich technische Maßnahmen; organisatorische Maßnahmen wie Schulungen sind optional.",correct:false}],
explanation:"Art. 9 richtet sich primär an Anbieter (Provider) und fordert einen kontinuierlichen Prozess – kein einmaliges Dokument. Betreiber haben separate Pflichten nach Art. 26. Das Risikomanagementsystem muss über den gesamten Lebenszyklus aktiv bleiben.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:28,module:3,type:1,question:"An welche Behörde und mit welcher Frist muss ein schwerwiegender KI-Bias-Vorfall (systematische Diskriminierung) nach EU AI Act Art. 73 gemeldet werden?",
answers:[
{id:"A",text:"An den Europäischen Datenschutzausschuss (EDSA) innerhalb von 72 Stunden.",correct:false},
{id:"B",text:"An die zuständige Datenschutzbehörde innerhalb von 72 Stunden nach DSGVO Art. 33.",correct:false},
{id:"C",text:"An die Europäische KI-Behörde (EU AI Office) innerhalb von 30 Tagen.",correct:false},
{id:"D",text:"An die nationale Marktüberwachungsbehörde innerhalb von 15 Tagen (bei Diskriminierung durch Hochrisiko-KI).",correct:true}],
explanation:"EU AI Act Art. 73 richtet sich an Anbieter und verpflichtet zur Meldung schwerwiegender Vorfälle an die Marktüberwachungsbehörde. Frist: 15 Tage bei Diskriminierung. Davon getrennt ist die DSGVO-Meldepflicht bei Datenpannen (72h an Datenschutzbehörde).",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:29,module:3,type:3,question:"Das SmartHire-Risikoregister bewertet das Bias-Risiko mit E=3 und S=5. Welche Konsequenz ergibt sich?",
answers:[
{id:"A",text:"R-Score = 15 (Hochrisiko) – SmartHire darf erst nach einem Bias-Audit eingesetzt werden.",correct:true},
{id:"B",text:"R-Score = 8 (Mittelrisiko) – das Risiko ist akzeptabel, wenn Monitoring aktiviert wird.",correct:false},
{id:"C",text:"R-Score = 15 (Hochrisiko) – das Projekt muss vollständig eingestellt werden.",correct:false},
{id:"D",text:"R-Score = 15 (Hochrisiko) – das Risiko wird akzeptiert, da Hochrisiko-KI per Definition hohe Scores haben darf.",correct:false}],
explanation:"E=3 × S=5 = R=15. Das ist Hochrisiko. Die korrekte Maßnahme ist nicht Projektabbruch (C), sondern ein Bias-Audit vor Go-Live mit konkreten Gegenmaßnahmen. Nach erfolgreichem Audit kann SmartHire in Betrieb genommen werden.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:30,module:3,type:1,question:"Welche Aussagen beschreiben das Risikomanagementsystem nach EU AI Act Art. 9 und ISO 42001 korrekt? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Das System muss kontinuierlich über den gesamten Lebenszyklus des KI-Systems aktiv bleiben.",correct:true},
{id:"B",text:"Das System muss jährlich durch eine externe notifizierte Stelle geprüft werden.",correct:false},
{id:"C",text:"Risiken müssen systematisch identifiziert, bewertet, gemindert und laufend überwacht werden.",correct:true},
{id:"D",text:"Eine einmalige Risikobewertung bei Inbetriebnahme reicht aus, wenn keine wesentlichen Änderungen erfolgen.",correct:false}],
explanation:"Sowohl EU AI Act Art. 9 als auch ISO 42001 (Kap. 6.1.2) fordern einen kontinuierlichen, iterativen Prozess. Externe Prüfung durch notifizierte Stelle ist nur in Ausnahmefällen vorgeschrieben (Art. 43 Abs. 1). Einmalige Bewertung ist ausdrücklich unzureichend.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:31,module:3,type:4,negativeHighlight:true,question:"Welche Aussage zu DSGVO Art. 32 (Technische und organisatorische Maßnahmen) ist NICHT korrekt?",
answers:[
{id:"A",text:"Bei Hochrisiko-KI sind typische TOMs: Verschlüsselung, Zugriffskontrolle, Logging und regelmäßige Audits.",correct:false},
{id:"B",text:"TOMs nach Art. 32 ersetzen die Notwendigkeit einer DSFA nach Art. 35 – wenn TOMs implementiert sind, entfällt die Pflicht zur Folgenabschätzung.",correct:true},
{id:"C",text:"TOMs müssen dem Stand der Technik entsprechen und regelmäßig überprüft werden.",correct:false},
{id:"D",text:"TOMs umfassen sowohl technische (z. B. Verschlüsselung) als auch organisatorische Maßnahmen (z. B. Schulungen, Zugriffskonzepte).",correct:false}],
explanation:"TOMs und DSFA sind separate Pflichten. Die DSFA nach Art. 35 bewertet die Risiken einer Verarbeitung und kann als Ergebnis haben, dass TOMs ausreichend sind – aber TOMs ersetzen die DSFA-Pflicht nicht.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:32,module:3,type:2,question:"Welche Aussage zur DSFA im Kontext von KI ist vollständig korrekt?",
answers:[
{id:"A",text:"Die DSFA und die KI-Folgenabschätzung nach ISO 42001 sind identisch und können durch ein einziges Dokument abgedeckt werden, ohne separate Anforderungen zu beachten.",correct:false},
{id:"B",text:"Eine DSFA ist nur erforderlich, wenn das KI-System biometrische Daten verarbeitet.",correct:false},
{id:"C",text:"Die DSFA muss abgeschlossen und bei der Datenschutzbehörde eingereicht werden, bevor das System in Betrieb genommen wird.",correct:false},
{id:"D",text:"Die DSFA fokussiert auf datenschutzrechtliche Risiken; die KI-Folgenabschätzung nach ISO 42001 hat einen breiteren Scope. In der Praxis werden beide oft zusammengefasst, müssen aber beide Perspektiven abdecken.",correct:true}],
explanation:"DSFA und KI-FA haben unterschiedliche Scope-Anforderungen. Die DSFA muss nicht zwingend bei der Behörde eingereicht werden – nur wenn die vorherige Konsultation nach Art. 36 erforderlich ist. Biometrische Daten sind nur ein Anwendungsfall der DSFA-Pflicht.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:33,module:3,type:3,question:"HR meldet, dass SmartHire seit 3 Monaten schlechtere Fairness-Scores liefert, obwohl das System nicht geändert wurde. Welches Phänomen beschreibt dieses Problem?",
answers:[
{id:"A",text:"Halluzination – das System erfindet Ausgaben.",correct:false},
{id:"B",text:"Prompt-Injection – externe Angriffe manipulieren das System.",correct:false},
{id:"C",text:"Modell-Drift – das Verhalten des Modells verschlechtert sich über Zeit ohne externe Änderungen, etwa weil sich die Datenverteilung verändert hat.",correct:true},
{id:"D",text:"Overfitting – das Modell spezialisiert sich zu stark auf alte Daten.",correct:false}],
explanation:"Modell-Drift (auch Konzept-Drift) beschreibt die Verschlechterung der Systemleistung über Zeit, ohne dass am System selbst etwas geändert wurde. Post-Market Monitoring (Art. 72 EU AI Act) dient gerade dazu, solchen Drift frühzeitig zu erkennen.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

{id:34,module:3,type:1,question:"Was unterscheidet die DSFA (DSGVO Art. 35) von der Grundrechts-Folgenabschätzung nach EU AI Act Art. 27?",
answers:[
{id:"A",text:"Die DSFA fokussiert auf datenschutzrechtliche Risiken; Art. 27 EU AI Act verpflichtet Betreiber von Hochrisiko-KI, Auswirkungen auf Grundrechte (Diskriminierung, Meinungsfreiheit etc.) zu bewerten.",correct:true},
{id:"B",text:"Art. 27 EU AI Act ersetzt die DSFA – wer eine Grundrechts-FA durchführt, muss keine DSFA mehr erstellen.",correct:false},
{id:"C",text:"Beide Instrumente sind identisch und können durch ein einziges Dokument erfüllt werden.",correct:false},
{id:"D",text:"Art. 27 gilt nur für Anbieter, nicht für Betreiber von KI-Systemen.",correct:false}],
explanation:"DSFA und Grundrechts-FA sind komplementär. Die DSFA ist datenschutzrechtlich (DSGVO), die Grundrechts-FA ist KI-Act-spezifisch und hat einen breiteren Scope. Art. 27 richtet sich explizit an Betreiber (nicht nur Anbieter) von Hochrisiko-KI.",
reference:"Modul 3 – Risikomanagement & Datenschutz"},

// ─── MODUL 4 – Projektmanagement & Qualitätssicherung ───────────────────────
{id:35,module:4,type:1,question:"Warum scheitern KI-Projekte laut Modul 4 häufig?",
answers:[
{id:"A",text:"Weil KI-Modelle technisch zu komplex für die meisten Entwicklerteams sind.",correct:false},
{id:"B",text:"Nicht an der Technik, sondern an Stakeholder-Konflikten, unklaren Abnahmekriterien und fehlenden QS-Prozessen.",correct:true},
{id:"C",text:"Weil KI-Systeme rechtlich noch nicht ausreichend reguliert sind und daher keine Abnahme stattfinden kann.",correct:false},
{id:"D",text:"Weil der Betriebsrat KI-Projekte regelmäßig blockiert.",correct:false}],
explanation:"KI-Projekte haben besondere Herausforderungen: probabilistische Ergebnisse, Datenabhängigkeit, nicht-deterministische Ausgaben. Die häufigsten Scheitergründe liegen aber in der Organisation: Stakeholder-Konflikte, fehlende Abnahmekriterien, mangelnder QS-Prozess.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:36,module:4,type:4,negativeHighlight:true,question:"Welche Aussage zu SMART-Zielen für KI-Projekte ist NICHT korrekt?",
answers:[
{id:"A",text:"Das M in SMART steht für Messbar – KI-Ziele müssen mit klaren Metriken (z. B. Fairness-Score ≥ 0,90) definiert werden.",correct:false},
{id:"B",text:"Das R in SMART steht für Relevant – das Ziel muss zum Geschäftszweck beitragen.",correct:false},
{id:"C",text:"Das T in SMART steht für Terminiert – das Ziel hat ein konkretes Enddatum.",correct:false},
{id:"D",text:"Das A in SMART steht für Automatisierbar – das KI-System muss das Ziel ohne menschliche Intervention erreichen können.",correct:true}],
explanation:"Das A in SMART steht für Akzeptiert (von den Stakeholdern) oder Achievable (erreichbar) – nicht für Automatisierbar. Ein KI-Ziel, das nicht von relevanten Stakeholdern akzeptiert wird, scheitert in der Praxis.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:37,module:4,type:3,question:"SmartHire wird getestet. Die Genauigkeit liegt bei 87 %, aber der Gender-Fairness-Score beträgt nur 0,84 (Mindestanforderung: ≥ 0,90). Was ist die korrekte Vorgehensweise?",
answers:[
{id:"A",text:"Das System in Betrieb nehmen – 87 % Genauigkeit übersteigen die Mindestanforderung.",correct:false},
{id:"B",text:"Das Abnahmekriterium für den Fairness-Score nachträglich auf 0,84 absenken.",correct:false},
{id:"C",text:"Go-Live verzögern, Ursachenanalyse durchführen, Gegenmaßnahmen implementieren und Re-Validierung gegen alle SMART-Kriterien durchführen.",correct:true},
{id:"D",text:"Das System für nicht-kritische Bewerbungen freigeben und den Fairness-Score nur für Führungspositionen einhalten.",correct:false}],
explanation:"SMART-Abnahmekriterien gelten kumulativ – alle müssen erfüllt sein. Nachträgliches Absenken (B) ist nicht zulässig. Go-Live trotz fehlendem Fairness-Score (A, D) würde gegen EU AI Act Art. 9 (Risikomanagementsystem) verstoßen.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:38,module:4,type:2,question:"Welche Aussage zum QS-Prozess bei KI-Projekten ist vollständig korrekt?",
answers:[
{id:"A",text:"Der QS-Prozess ist ein Kreislauf: Abweichung erkennen → Ursachenanalyse → Gegenmaßnahmen → Re-Validierung gegen SMART-Kriterien. ISO 42001 Kap. 10.1/10.2 fordert diesen Kreislauf explizit.",correct:true},
{id:"B",text:"Der QS-Prozess ist ein einmaliger Schritt vor Go-Live; nach erfolgreicher Abnahme ist keine weitere Qualitätsprüfung gesetzlich vorgeschrieben.",correct:false},
{id:"C",text:"Die Ursachenanalyse im QS-Prozess ist ausreichend, ohne dass eine erneute Validierung gegen SMART-Kriterien erforderlich wäre.",correct:false},
{id:"D",text:"Post-Market Monitoring (Art. 72 EU AI Act) ist eine empfehlenswerte Best Practice, ersetzt aber keine formalen QS-Prozesse.",correct:false}],
explanation:"QS ist ein kontinuierlicher Kreislauf. ISO 42001 Kap. 10 fordert ausdrücklich fortlaufende Verbesserung. Eine Ursachenanalyse ohne Re-Validierung ist unvollständig. Post-Market Monitoring ist gesetzlich verpflichtend – keine Best Practice.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:39,module:4,type:1,question:"Wann löst eine Erweiterung des SmartHire-Einsatzes (z. B. von Deutschland auf Frankreich und Polen) eine neue Konformitätsprüfung nach EU AI Act aus?",
answers:[
{id:"A",text:"Immer – jede internationale Expansion löst automatisch eine neue Konformitätsbewertung aus.",correct:false},
{id:"B",text:"Nur wenn Frankreich oder Polen andere nationale KI-Gesetze als Deutschland haben.",correct:false},
{id:"C",text:"Nie – die einmalige CE-Kennzeichnung gilt EU-weit und erfordert keine erneute Prüfung.",correct:false},
{id:"D",text:"Wenn eine 'wesentliche Veränderung' (Art. 3 Nr. 23 EU AI Act) vorliegt – z. B. neuer Scope, neue Risiken oder neue Anforderungen durch die Expansion.",correct:true}],
explanation:"EU AI Act Art. 3(23) definiert wesentliche Veränderungen, die eine neue Konformitätsbewertung (Art. 43 Abs. 4) auslösen. Internationale Skalierung kann solche wesentlichen Veränderungen beinhalten (neue Sprachen, neue Trainingsdaten, neue regulatorische Anforderungen).",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:40,module:4,type:3,question:"Beim SmartHire-Rollout wird der Betriebsrat erst nach der Pilotphase informiert. Welche Konsequenz droht?",
answers:[
{id:"A",text:"Keine – der Betriebsrat hat bei KI-Systemen kein Mitbestimmungsrecht.",correct:false},
{id:"B",text:"Der Betriebsrat hat Mitbestimmungsrecht beim Einsatz technischer Überwachungseinrichtungen (§ 87 Abs. 1 Nr. 6 BetrVG). Fehlende Einbindung kann zur Unwirksamkeit der Betriebsvereinbarung führen.",correct:true},
{id:"C",text:"Der Betriebsrat muss nur informiert, nicht beteiligt werden – eine nachträgliche Information reicht aus.",correct:false},
{id:"D",text:"EU AI Act Art. 26 Abs. 7 verpflichtet den Betriebsrat zur Zustimmung; ohne Zustimmung ist der Einsatz illegal.",correct:false}],
explanation:"§ 87 Abs. 1 Nr. 6 BetrVG gibt dem Betriebsrat Mitbestimmungsrecht bei technischen Einrichtungen zur Überwachung. Fehlende Einbindung kann die Betriebsvereinbarung unwirksam machen. Art. 26 Abs. 7 EU AI Act regelt die Arbeitnehmer-Information, das BetrVG regelt die Betriebsratsrechte.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:41,module:4,type:1,question:"Welche Stakeholder werden bei KI-Projekten laut Modul 4 am häufigsten vergessen?",
answers:[
{id:"A",text:"Betroffene Personen (z. B. Bewerber) und Betriebsrat – beide sind relevante Stakeholder, auch wenn sie nicht direkt am Projekt beteiligt sind.",correct:true},
{id:"B",text:"IT-Abteilung und externe Softwareentwickler.",correct:false},
{id:"C",text:"Geschäftsführung und Datenschutzbeauftragte:r.",correct:false},
{id:"D",text:"Nur der Betriebsrat – Bewerber gelten nicht als Projektstakeholder.",correct:false}],
explanation:"Betroffene Personen (Bewerber) sind laut Modul 4 Stakeholder – auch wenn sie nicht am Projekt beteiligt sind. Der Betriebsrat wird wegen des Mitbestimmungsrechts (§ 87 BetrVG) oft zu spät eingebunden. Beide Gruppen können den Projekterfolg erheblich beeinflussen.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:42,module:4,type:4,negativeHighlight:true,question:"Welche der folgenden Aussagen zum Post-Market Monitoring (Art. 72 EU AI Act) ist NICHT korrekt?",
answers:[
{id:"A",text:"Post-Market Monitoring ist für Hochrisiko-KI gesetzlich verpflichtend – nicht optional.",correct:false},
{id:"B",text:"Es umfasst laufende Datenerfassung über Systemleistung und frühzeitige Drift-Erkennung.",correct:false},
{id:"C",text:"Post-Market Monitoring ersetzt die initiale Konformitätsbewertung nach Art. 43 – wer kontinuierlich überwacht, muss das System nicht vorab zertifizieren.",correct:true},
{id:"D",text:"Logs müssen mindestens 6 Monate nach Betrieb aufbewahrt werden.",correct:false}],
explanation:"Post-Market Monitoring (Art. 72) und Konformitätsbewertung (Art. 43) sind separate Pflichten. Das Monitoring beginnt nach Inverkehrbringen und ersetzt die Vorabprüfung nicht. Beide sind verpflichtend.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:43,module:4,type:2,question:"Welche Aussage zu SMART-Abnahmekriterien ist vollständig korrekt?",
answers:[
{id:"A",text:"SMART-Abnahmekriterien können nach der Pilotphase angepasst werden, wenn das Team feststellt, dass die ursprünglichen Ziele unrealistisch waren.",correct:false},
{id:"B",text:"Nur quantitative Metriken (z. B. Genauigkeit ≥ 85 %) können SMART-Abnahmekriterien sein; qualitative Aspekte sind nicht messbar.",correct:false},
{id:"C",text:"SMART-Abnahmekriterien gelten nur bis zum Go-Live; danach gelten ausschließlich die Monitoring-Schwellenwerte.",correct:false},
{id:"D",text:"SMART-Abnahmekriterien gelten kumulativ: Alle Kriterien müssen erfüllt sein. Ein niedriger Fairness-Score rechtfertigt keinen Go-Live, auch wenn alle anderen Kriterien erfüllt sind.",correct:true}],
explanation:"Alle SMART-Kriterien müssen erfüllt sein – nicht nur die meisten. Das Absenken von Kriterien nach Pilotphase (A) untergräbt die Abnahmesystematik. Qualitative Aspekte (B) können durch Nutzerakzeptanztests messbar gemacht werden.",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:44,module:4,type:1,question:"Was ist der Unterschied zwischen Stakeholder-Management und rechtlichen Beteiligungspflichten bei KI-Projekten?",
answers:[
{id:"A",text:"Es gibt keinen Unterschied – beide Begriffe bezeichnen dieselbe Aktivität.",correct:false},
{id:"B",text:"Stakeholder-Management ist eine Best Practice zur Projektkommunikation; Beteiligungspflichten (z. B. Betriebsrat nach BetrVG, Arbeitnehmer-Information nach EU AI Act Art. 26 Abs. 7) sind rechtlich bindend.",correct:true},
{id:"C",text:"Beteiligungspflichten gelten nur in Unternehmen mit mehr als 500 Mitarbeitern.",correct:false},
{id:"D",text:"Stakeholder-Management fokussiert auf externe Stakeholder; Beteiligungspflichten betreffen nur interne Mitarbeitende.",correct:false}],
explanation:"Das Stakeholder-Management ist eine Managementdisziplin (Best Practice). Beteiligungspflichten sind rechtsverbindlich: § 87 BetrVG (Betriebsrat), Art. 26 Abs. 7 EU AI Act (Arbeitnehmer-Information). Beide gelten unabhängig von der Unternehmensgröße (BetrVG ab bestimmten Schwellen, EU AI Act generell).",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

{id:45,module:4,type:3,question:"SmartHire wird nach dem Piloten auf alle HR-Standorte ausgerollt. ISO 42001 Kap. 6.3 fordert, dass geplante Änderungen dokumentiert werden. Was bedeutet das konkret?",
answers:[
{id:"A",text:"Alle IT-Änderungen müssen extern zertifiziert werden, bevor der Rollout starten darf.",correct:false},
{id:"B",text:"ISO 42001 Kap. 6.3 gilt nur für Änderungen am KI-Modell selbst, nicht für organisatorische Skalierungen.",correct:false},
{id:"C",text:"Der Rollout muss als geplante Änderung im AIMS dokumentiert werden – spontane, undokumentierte Systemänderungen sind normwidrig. Lektionen aus dem Pilot müssen integriert werden.",correct:true},
{id:"D",text:"Geplante Änderungen nach ISO 42001 Kap. 6.3 erfordern eine neue Zertifizierung des gesamten AIMS.",correct:false}],
explanation:"ISO 42001 Kap. 6.3 fordert, dass Änderungen am AIMS geplant und dokumentiert werden. Der Rollout ist eine geplante Änderung, die im Risikoregister und im AIMS-Scope-Dokument verankert sein muss. Lessons Learned aus dem Pilot müssen einfließen (Kap. 10.1).",
reference:"Modul 4 – Projektmanagement & Qualitätssicherung"},

// ─── MODUL 5 – Daten- & Change-Management ───────────────────────────────────
{id:46,module:5,type:1,question:"Aus welchen drei Rechtsnormen ergibt sich die Pflicht zur Datenqualität bei KI-Systemen wie SmartHire?",
answers:[
{id:"A",text:"DSGVO Art. 13, EU AI Act Art. 5 und ISO 42001 Kap. 9.",correct:false},
{id:"B",text:"DSGVO Art. 22, EU AI Act Art. 9 und ISO 9001.",correct:false},
{id:"C",text:"EU AI Act Art. 47, DSGVO Art. 32 und ISO 42001 Kap. 7.3.",correct:false},
{id:"D",text:"EU AI Act Art. 10 (Trainingsdaten), DSGVO Art. 5 Abs. 1d (Richtigkeit) und ISO 42001 A.7.4 (Datenanforderungen).",correct:true}],
explanation:"Die drei Rechtsgrundlagen für Datenqualität sind: EU AI Act Art. 10(3) (repräsentative, relevante, biasfreie Trainingsdaten), DSGVO Art. 5(1d) (Grundsatz der Richtigkeit) und ISO 42001 A.7.4 (Datenanforderungen definieren und sicherstellen).",
reference:"Modul 5 – Daten- & Change-Management"},

{id:47,module:5,type:4,negativeHighlight:true,question:"Welche Aussage zu den vier Dimensionen der Datenqualität ist NICHT korrekt?",
answers:[
{id:"A",text:"Aktualität bedeutet, dass Trainingsdaten möglichst viele historische Bewerbungen aus den letzten 20 Jahren enthalten sollten, um das Modell umfassend zu trainieren.",correct:true},
{id:"B",text:"Vollständigkeit bedeutet, dass keine fehlenden Werte in den Trainingsdaten vorhanden sein sollten.",correct:false},
{id:"C",text:"Konsistenz bedeutet, dass Duplikate und Widersprüche in den Daten vermieden werden.",correct:false},
{id:"D",text:"Genauigkeit bedeutet, dass die gespeicherten Daten die Wahrheit korrekt abbilden.",correct:false}],
explanation:"Aktualität bedeutet, dass Daten zeitnah aktualisiert sind – nicht, dass möglichst viele historische Daten vorhanden sind. Sehr alte Trainingsdaten können historische Biases einschleppen (z. B. aus einer Zeit, in der Frauen in MINT-Berufen unterrepräsentiert waren).",
reference:"Modul 5 – Daten- & Change-Management"},

{id:48,module:5,type:2,question:"Welche Aussage zu Data Owner und Data Steward ist vollständig korrekt?",
answers:[
{id:"A",text:"Data Owner und Data Steward sind austauschbare Begriffe für dieselbe Funktion; es gibt keine relevanten Unterschiede.",correct:false},
{id:"B",text:"Der Data Steward trägt die strategische Verantwortung für Daten; der Data Owner kümmert sich um die operative Datenqualität.",correct:false},
{id:"C",text:"Der Data Owner trägt die fachliche Verantwortung (z. B. HR-Leiter für Bewerbungsdaten); der Data Steward kümmert sich operativ um Qualität, Duplikate und Audit-Vorbereitung.",correct:true},
{id:"D",text:"Beide Rollen sind reine IT-Funktionen; Fachabteilungen wie HR sind nicht in die Daten-Governance einzubinden.",correct:false}],
explanation:"Data Owner = fachliche Verantwortung + strategische Entscheidungen (z. B. HR-Leiter). Data Steward = operative Qualitätssicherung. Ein typischer Fehler ist, Daten-Governance nur als IT-Thema zu behandeln – Fachabteilungen müssen aktiv eingebunden werden (ISO 42001 A.3.2, A.7.2).",
reference:"Modul 5 – Daten- & Change-Management"},

{id:49,module:5,type:3,question:"Beim SmartHire-Piloten zeigt sich, dass das System bei französischen und polnischen Namen deutlich schlechtere Performance hat. Was ist die Ursache und welche Maßnahme ist erforderlich?",
answers:[
{id:"A",text:"Das ist ein Software-Bug, der durch ein Update behoben werden muss.",correct:false},
{id:"B",text:"Die Trainingsdaten waren nicht repräsentativ für alle relevanten Bevölkerungsgruppen. Für die internationale Skalierung sind neue, repräsentative Trainingsdaten für die Zielmärkte erforderlich (EU AI Act Art. 10, ISO 42001 A.7.4).",correct:true},
{id:"C",text:"Das Problem liegt in der Übersetzung – das System muss auf Englisch umgestellt werden.",correct:false},
{id:"D",text:"Das System muss für ausländische Namen deaktiviert werden.",correct:false}],
explanation:"EU AI Act Art. 10(3) fordert, dass Trainingsdaten repräsentativ für den Anwendungsbereich sind. Bei internationaler Skalierung gehören auch die Zielgruppen der neuen Märkte dazu. Neue Trainingsdaten und ggf. eine neue DSFA sind erforderlich.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:50,module:5,type:1,question:"Was beschreibt normkonformes Change-Management nach ISO 42001 Kap. 5.1?",
answers:[
{id:"A",text:"Führungsengagement der obersten Leitung ist normative Pflicht – nicht optional. Verantwortung kann nicht vollständig an den KI-Beauftragten delegiert werden.",correct:true},
{id:"B",text:"Change-Management ist eine Soft-Skill-Disziplin und liegt im Ermessen des Projektleiters.",correct:false},
{id:"C",text:"ISO 42001 Kap. 5.1 gilt nur für die technische Implementierung; Change-Management ist nicht normativ geregelt.",correct:false},
{id:"D",text:"Führungsengagement bedeutet lediglich, das Budget für KI-Projekte freizugeben.",correct:false}],
explanation:"ISO 42001 Kap. 5.1 macht Führungsengagement zur normativen Pflicht der obersten Leitung. Das umfasst: Policy kommunizieren, Ressourcen bereitstellen, Verantwortung übernehmen. Die operative Umsetzung kann delegiert werden, die Gesamtverantwortung bleibt bei der Geschäftsführung.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:51,module:5,type:4,negativeHighlight:true,question:"Welche Aussage zu Change-Management-Erfolgsfaktoren bei KI-Projekten ist NICHT korrekt?",
answers:[
{id:"A",text:"Frühe Kommunikation über Ziele und Veränderungen reduziert Widerstände bei Mitarbeitenden.",correct:false},
{id:"B",text:"Widerstand von Mitarbeitenden sollte ernst genommen werden – er enthält oft berechtigte Sorgen über Fairness oder Arbeitsplatzsicherheit.",correct:false},
{id:"C",text:"Ein Pilotprojekt mit einer kleinen Gruppe ermöglicht Early Wins und Feedback vor dem großen Rollout.",correct:false},
{id:"D",text:"Change-Management-Schulungen sind einmalig durchzuführen und anschließend als abgeschlossen zu betrachten.",correct:true}],
explanation:"ISO 42001 Kap. 7.2/7.3 fordert laufende Schulungen und Awareness – nicht einmalig. Gerade bei KI-Systemen verändern sich Anforderungen, und HR-Mitarbeitende müssen kontinuierlich geschult bleiben.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:52,module:5,type:3,question:"Nach dem SmartHire-Pilot zeigt die Lessons-Learned-Analyse Verbesserungspotenzial bei Grenzfall-Entscheidungen. Was ist normkonform vor dem Rollout?",
answers:[
{id:"A",text:"Sofortiger Rollout – der Pilot hat gezeigt, dass das System grundsätzlich funktioniert.",correct:false},
{id:"B",text:"Rollout nur mit schriftlicher Genehmigung einer notifizierten Stelle.",correct:false},
{id:"C",text:"Lessons Learned aus dem Pilot in den Rollout integrieren (ISO 42001 Kap. 10.1), die Änderungen dokumentieren (Kap. 6.3) und dann stufenweise ausrollen.",correct:true},
{id:"D",text:"Pilotphase verlängern, bis alle Probleme vollständig gelöst sind, bevor irgendein Rollout stattfindet.",correct:false}],
explanation:"ISO 42001 Kap. 10.1 fordert, Verbesserungen aus Erkenntnissen umzusetzen. Kap. 6.3 verlangt, Änderungen zu dokumentieren. Ein stufenweiser Rollout mit integrierten Lessons Learned ist normkonform. Sofortiger Rollout (A) ignoriert die Verbesserungspflicht.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:53,module:5,type:2,question:"Welche Aussage zur Logging-Pflicht nach EU AI Act Art. 12 und Art. 26 Abs. 5 ist vollständig korrekt?",
answers:[
{id:"A",text:"EU AI Act Art. 12 verpflichtet den Betreiber zur Protokollierung aller KI-Ausgaben, solange das System in Betrieb ist – eine Mindestfrist gibt es nicht.",correct:false},
{id:"B",text:"EU AI Act Art. 12 verpflichtet den Anbieter, das System so zu bauen, dass Protokollierung möglich ist. Art. 26 Abs. 5 verpflichtet den Betreiber, Logs mindestens 6 Monate aufzubewahren. Dabei kann ein Konflikt mit der DSGVO-Löschpflicht entstehen.",correct:true},
{id:"C",text:"Die Logging-Pflicht nach EU AI Act Art. 12 gilt nicht für Betreiber – nur für Anbieter sind Logs verpflichtend.",correct:false},
{id:"D",text:"Logs dürfen nach EU AI Act Art. 12 unbegrenzt aufbewahrt werden, da Auditierbarkeit Vorrang vor der DSGVO-Speicherbegrenzung hat.",correct:false}],
explanation:"Art. 12 richtet sich an Anbieter (technische Logging-Fähigkeit), Art. 26 Abs. 5 an Betreiber (6 Monate Aufbewahrung). Der Konflikt: Bewerberdaten sollen nach DSGVO Art. 17 nach 6 Monaten gelöscht werden – aber die Logs müssen 6 Monate aufbewahrt werden. Eine Abwägung ist erforderlich.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:54,module:5,type:1,question:"Was ist nach ISO 42001 Kap. 4.3 der AIMS-Scope und warum ist er wichtig?",
answers:[
{id:"A",text:"Der Scope definiert die technischen Systemanforderungen – welche Funktionen das KI-System haben muss.",correct:false},
{id:"B",text:"Der Scope legt das Budget und die Ressourcen fest, die für das AIMS bereitgestellt werden.",correct:false},
{id:"C",text:"Der Scope ist nur für die Zertifizierung relevant und hat keine operativen Auswirkungen.",correct:false},
{id:"D",text:"Der Scope definiert Grenzen und Anwendbarkeit des AIMS – welche KI-Systeme, Standorte und Prozesse eingeschlossen sind. Entscheidung: Gilt das AIMS nur für SmartHire oder für alle zukünftigen KI-Systeme?",correct:true}],
explanation:"Der AIMS-Scope (Kap. 4.3) legt fest, für welche KI-Systeme und Prozesse das AIMS gilt. Ein enger Scope (nur SmartHire) ist leichter zu managen; ein breiter Scope skaliert besser für zukünftige Projekte. Bei neuen Projekten muss der Scope aktualisiert werden.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:55,module:5,type:3,question:"Die Muster GmbH wählt ein neues cloud-basiertes KI-Tool aus, bei dem der Anbieter Bewerberdaten auf eigenen Servern verarbeitet. Was ist datenschutzrechtlich zwingend erforderlich?",
answers:[
{id:"A",text:"Ein Auftragsverarbeitungsvertrag (AVV) nach DSGVO Art. 28, da der Anbieter personenbezogene Daten im Auftrag der Muster GmbH verarbeitet.",correct:true},
{id:"B",text:"Nichts Besonderes – Cloud-Dienste sind durch AGB abgedeckt.",correct:false},
{id:"C",text:"Ein AVV ist nur bei Drittlandstransfer erforderlich.",correct:false},
{id:"D",text:"Nur eine Einwilligung der Bewerber – ein AVV ist nicht notwendig.",correct:false}],
explanation:"Ein AVV nach DSGVO Art. 28 ist zwingend, wenn ein Dritter personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet. Bei cloud-basierten Tools verarbeitet der Anbieter die Daten – AVV ist Pflicht, unabhängig vom Serverstandort.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:56,module:5,type:4,negativeHighlight:true,question:"Welche Aussage zur internationalen Skalierung von SmartHire (DE → FR → PL) ist NICHT korrekt?",
answers:[
{id:"A",text:"Für jeden neuen Markt muss geprüft werden, ob die Trainingsdaten repräsentativ für die neue Zielgruppe sind.",correct:false},
{id:"B",text:"Die CE-Kennzeichnung aus Deutschland gilt automatisch EU-weit – eine neue Konformitätsprüfung ist bei der Expansion in andere EU-Länder nie erforderlich.",correct:true},
{id:"C",text:"In jedem neuen Markt kann eine eigene DSFA erforderlich sein, weil lokale Datenschutzbehörden unterschiedliche Anforderungen haben können.",correct:false},
{id:"D",text:"Bei Skalierung muss der AIMS-Scope nach ISO 42001 Kap. 4.3 aktualisiert werden.",correct:false}],
explanation:"Die CE-Kennzeichnung gilt EU-weit – aber wenn die Expansion eine 'wesentliche Veränderung' nach EU AI Act Art. 3(23) darstellt (neuer Scope, neue Risiken), kann eine neue Konformitätsbewertung nötig sein. Der AIMS-Scope muss immer aktualisiert werden.",
reference:"Modul 5 – Daten- & Change-Management"},

// ─── MODUL 6 – ISO/IEC 42001 ─────────────────────────────────────────────────
{id:57,module:6,type:1,question:"Was ist das AIMS (Artificial Intelligence Management System) und wozu dient es?",
answers:[
{id:"A",text:"Ein technisches System zur automatischen Erkennung von Bias in KI-Modellen.",correct:false},
{id:"B",text:"Eine Softwarelösung für das Projektmanagement von KI-Entwicklungsprojekten.",correct:false},
{id:"C",text:"Ein systematischer Managementrahmen zur verantwortungsvollen Entwicklung, Bereitstellung und Nutzung von KI – analog zu ISO 9001 (Qualität) oder ISO 27001 (Informationssicherheit).",correct:true},
{id:"D",text:"Ein Zertifizierungsprogramm der EU-Kommission für Hochrisiko-KI-Systeme.",correct:false}],
explanation:"AIMS = Artificial Intelligence Management System. Es ist kein technisches Tool, sondern ein organisatorischer Managementrahmen. ISO 42001 folgt der High Level Structure (HLS), die identisch mit ISO 9001 und ISO 27001 ist – was die Integration erleichtert.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:58,module:6,type:4,negativeHighlight:true,question:"Welche der folgenden Aussagen zum PDCA-Zyklus in ISO 42001 ist NICHT korrekt?",
answers:[
{id:"A",text:"PLAN (Kap. 4+6) umfasst AIMS-Struktur, SMART-Ziele und Risikoidentifikation.",correct:false},
{id:"B",text:"DO (Kap. 7+8) beinhaltet Implementation, Operationalisierung und Dokumentation.",correct:false},
{id:"C",text:"CHECK (Kap. 9) umfasst Managementbewertung, interne Audits und Überwachung.",correct:false},
{id:"D",text:"Der PDCA-Zyklus endet mit ACT (Kap. 10), sobald alle Nichtkonformitäten behoben sind und das AIMS als abgeschlossen gilt.",correct:true}],
explanation:"PDCA ist ein kontinuierlicher Zyklus – er hat kein Ende. ISO 42001 Kap. 10.1 fordert explizit fortlaufende Verbesserung. Das AIMS ist kein Projekt, das 'abgeschlossen' werden kann – es muss dauerhaft aktiv bleiben.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:59,module:6,type:3,question:"Die KI-Policy der Muster GmbH lautet: 'Wir nutzen KI, um die Effizienz in der Personalabteilung zu steigern und Prozesse zu optimieren.' Ist diese Policy ISO 42001-konform?",
answers:[
{id:"A",text:"Nein – die Policy ist vage, enthält keinen Compliance-Bezug zu EU AI Act oder ISO 42001, keine Unterschrift der Geschäftsführung und keinen Verweis auf Verbesserungspflicht (PDCA).",correct:true},
{id:"B",text:"Ja – eine KI-Policy muss nur den Anwendungsbereich beschreiben; detaillierte Anforderungen gehören ins Risikoregister.",correct:false},
{id:"C",text:"Ja – solange die Policy genehmigt wurde, erfüllt sie die Anforderungen von ISO 42001 Kap. 5.2.",correct:false},
{id:"D",text:"Nein – eine KI-Policy nach ISO 42001 muss mindestens 10 Seiten umfassen und alle Risiken adressieren.",correct:false}],
explanation:"ISO 42001 Kap. 5.2 verlangt, dass die KI-Policy: den Kontext berücksichtigt, Rahmen für KI-Ziele bietet, Compliance-Verpflichtung enthält, Verbesserungspflicht nennt, kommuniziert und für alle relevanten Personen zugänglich ist sowie von der GF unterzeichnet wird.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:60,module:6,type:2,question:"Welche Aussage zur Beziehung zwischen ISO 42001 und EU AI Act Art. 17 (QMS) ist vollständig korrekt?",
answers:[
{id:"A",text:"ISO 42001 und EU AI Act Art. 17 haben keine Verbindung – beide werden völlig unabhängig voneinander erfüllt.",correct:false},
{id:"B",text:"ISO 42001 ist die operative Grundlage für EU AI Act Art. 17 (QMS für Hochrisiko-KI). Wer ISO 42001 implementiert, erfüllt damit wesentliche QMS-Anforderungen des EU AI Acts.",correct:true},
{id:"C",text:"ISO 42001 geht über EU AI Act Art. 17 hinaus und kann die CE-Kennzeichnung vollständig ersetzen.",correct:false},
{id:"D",text:"EU AI Act Art. 17 schreibt explizit ISO 42001 als einzige anerkannte Norm für QMS-Anforderungen vor.",correct:false}],
explanation:"ISO 42001-Implementierung erfüllt wesentliche Art. 17-Anforderungen (QMS-Pflicht für Anbieter von Hochrisiko-KI). ISO 42001 ist freiwillig, aber im Zusammenspiel mit dem AI Act de facto relevant. Die Norm ersetzt aber nicht die CE-Kennzeichnung oder die Konformitätsbewertung.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:61,module:6,type:1,question:"Welche Pflichtdokumente schreibt ISO 42001 für das AIMS vor?",
answers:[
{id:"A",text:"Einzig die KI-Policy – alle anderen Dokumente sind optional.",correct:false},
{id:"B",text:"KI-Policy und Risikoregister – weitere Dokumente werden empfohlen, aber nicht gefordert.",correct:false},
{id:"C",text:"Nur externe Audit-Berichte notifizierter Stellen und CE-Kennzeichnungsdokumente.",correct:false},
{id:"D",text:"KI-Policy (Kap. 5.2), AIMS-Scope-Dokument (Kap. 4.3), Risikoregister (Kap. 6.1.2), Schulungsnachweise (Kap. 7.2) und Audit-Berichte (Kap. 9).",correct:true}],
explanation:"ISO 42001 schreibt mehrere Pflichtdokumente vor. Alle aufgeführten Dokumente sind normativ gefordert. Zusätzlich ist die technische Dokumentation (EU AI Act Art. 11) eine separate Pflicht. Das Fehlen eines dieser Dokumente kann bei einem Audit zur Nichtkonformität führen.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:62,module:6,type:3,question:"Die Geschäftsführerin der Muster GmbH delegiert alle KI-Verantwortlichkeiten an die KI-Beauftragte. Sie selbst liest weder die KI-Policy noch nimmt sie an der Managementbewertung teil. Welche Norm-Anforderung wird verletzt?",
answers:[
{id:"A",text:"ISO 42001 Kap. 7.2 – Schulungspflicht der Mitarbeitenden.",correct:false},
{id:"B",text:"ISO 42001 Kap. 6.1.2 – Risikoidentifikation muss von der operativen Ebene durchgeführt werden.",correct:false},
{id:"C",text:"ISO 42001 Kap. 5.1 – Führungsengagement und Accountability der obersten Leitung ist normative Pflicht und nicht vollständig delegierbar.",correct:true},
{id:"D",text:"EU AI Act Art. 26 Abs. 1 – Betreiber müssen das System persönlich bedienen können.",correct:false}],
explanation:"ISO 42001 Kap. 5.1 macht das Führungsengagement der obersten Leitung zur normativen Pflicht. Die GF muss die Policy kennen, kommunizieren und die Managementbewertung (Kap. 9.3) aktiv führen. Operative Aufgaben können delegiert werden, die Gesamtverantwortung nicht.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:63,module:6,type:4,negativeHighlight:true,question:"Welche Aussage zur High Level Structure (HLS) von ISO 42001 ist NICHT korrekt?",
answers:[
{id:"A",text:"ISO 42001 hat eine einzigartige Struktur, die sich bewusst von ISO 9001 und ISO 27001 unterscheidet, um KI-spezifische Besonderheiten abzubilden.",correct:true},
{id:"B",text:"Die HLS erleichtert die Integration von ISO 42001 mit bereits vorhandenen Managementsystemen.",correct:false},
{id:"C",text:"ISO 42001 folgt denselben Kapiteln 4–10 wie ISO 9001 und ISO 27001.",correct:false},
{id:"D",text:"Organisationen, die bereits ISO 9001 oder ISO 27001 implementiert haben, können ISO 42001 einfacher einführen.",correct:false}],
explanation:"ISO 42001 folgt bewusst der High Level Structure (HLS), die identisch mit ISO 9001, ISO 27001, ISO 14001 usw. ist. Das ist ein Designprinzip zur Erleichterung der Integration – keine einzigartige, abweichende Struktur.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:64,module:6,type:1,question:"Was sind nach ISO 42001 Pflichten der obersten Leitung bezüglich des AIMS? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Jährliche Managementbewertung (Kap. 9.3) zur Überprüfung der AIMS-Effektivität und der Zielerreichung.",correct:true},
{id:"B",text:"Persönliche Zertifizierung als KI-Experte durch eine externe Stelle.",correct:false},
{id:"C",text:"Bereitstellung der notwendigen Ressourcen (Budget, Personal, Zeit) für das AIMS (Kap. 5.1).",correct:true},
{id:"D",text:"Persönliche Durchführung aller internen Audits (Kap. 9.2).",correct:false}],
explanation:"Die oberste Leitung muss: Policy kommunizieren, Ressourcen bereitstellen (Kap. 5.1) und Managementbewertung führen (Kap. 9.3). Audits (D) können von internen Auditoren durchgeführt werden – nicht zwingend von der GF. Externe Zertifizierung der GF (B) ist keine Norm-Anforderung.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:65,module:6,type:2,question:"Welche Aussage zu den Assessments nach ISO 42001 ist vollständig korrekt?",
answers:[
{id:"A",text:"Die DSFA und das KI-Impact-Assessment nach ISO 42001 sind identisch und können durch ein Dokument erfüllt werden, ohne weitere Anforderungen zu beachten.",correct:false},
{id:"B",text:"Das Grundrechts-FA nach EU AI Act Art. 27 ist nur für Anbieter Pflicht; Betreiber sind davon ausgenommen.",correct:false},
{id:"C",text:"ISO 42001 fordert keine Impact Assessments – diese sind nur im EU AI Act verankert.",correct:false},
{id:"D",text:"ISO 42001 Kap. 6.1.4 und A.5.2 fordern KI-Impact-Assessments. Dies ergänzt die DSFA (DSGVO Art. 35) und das Grundrechts-FA (EU AI Act Art. 27), ohne diese zu ersetzen.",correct:true}],
explanation:"Die drei Instrumente (DSFA, Grundrechts-FA, ISO 42001 KI-Impact-Assessment) haben unterschiedliche Scope-Anforderungen. Art. 27 EU AI Act richtet sich an Betreiber (nicht nur Anbieter). In der Praxis können sie in einem integrierten Dokument zusammengeführt werden.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:66,module:6,type:3,question:"Die Muster GmbH möchte den AIMS-Scope bewusst eng halten: nur SmartHire, nicht zukünftige KI-Projekte. Welche Konsequenz hat das?",
answers:[
{id:"A",text:"Das ist nicht zulässig – ISO 42001 schreibt vor, dass alle KI-Systeme in den Scope einzubeziehen sind.",correct:false},
{id:"B",text:"Ein enger Scope ist zulässig und leichter zu managen. Wenn zukünftige KI-Projekte starten, muss der Scope nach Kap. 4.3 aktualisiert werden.",correct:true},
{id:"C",text:"Ein enger Scope ist nur bei Unternehmen mit weniger als 50 Mitarbeitern zulässig.",correct:false},
{id:"D",text:"Ein enger Scope führt automatisch dazu, dass keine Zertifizierung nach ISO 42001 möglich ist.",correct:false}],
explanation:"ISO 42001 Kap. 4.3 gibt der Organisation Spielraum bei der Scope-Definition. Ein enger Scope (nur SmartHire) ist legitim, wenn er explizit dokumentiert ist. Bei neuen KI-Projekten ist eine Scope-Aktualisierung erforderlich – das ist eine geplante Änderung nach Kap. 6.3.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:67,module:6,type:1,question:"Wer entwickelte das PDCA-Prinzip und in welchem Zusammenhang steht es zu ISO 42001?",
answers:[
{id:"A",text:"ISO 42001 hat das PDCA-Prinzip neu entwickelt, speziell für KI-Managementsysteme.",correct:false},
{id:"B",text:"Das PDCA-Prinzip wurde von der EU-Kommission für den EU AI Act konzipiert und in ISO 42001 übernommen.",correct:false},
{id:"C",text:"PDCA wurde von W. Edwards Deming entwickelt (Deming-Zyklus) und ist das Kernprinzip aller ISO-Managementsysteme (ISO 9001, ISO 27001, ISO 42001).",correct:true},
{id:"D",text:"PDCA steht für Plan-Deploy-Control-Analyse und wurde für Unternehmensberatung entwickelt.",correct:false}],
explanation:"PDCA = Plan-Do-Check-Act, entwickelt von W. Edwards Deming (auch Deming-Zyklus). Es ist das universelle Prinzip aller ISO-Managementsysteme. In ISO 42001: PLAN (Kap. 4+6), DO (Kap. 7+8), CHECK (Kap. 9), ACT (Kap. 10).",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

{id:68,module:6,type:4,negativeHighlight:true,question:"Welche Aussage zu einer validen KI-Policy nach ISO 42001 Kap. 5.2 ist NICHT korrekt?",
answers:[
{id:"A",text:"Eine KI-Policy muss mindestens 5 Seiten umfassen und alle identifizierten Risiken detailliert beschreiben.",correct:true},
{id:"B",text:"Die KI-Policy muss von der obersten Leitung unterzeichnet und an alle relevanten Personen kommuniziert werden.",correct:false},
{id:"C",text:"Die KI-Policy muss einen Rahmen für KI-bezogene Ziele bieten und eine Verpflichtung zur kontinuierlichen Verbesserung enthalten.",correct:false},
{id:"D",text:"Eine KI-Policy, die nur Effizienzsteigerung als Ziel nennt und keinen Compliance-Bezug hat, ist nicht ISO 42001-konform.",correct:false}],
explanation:"ISO 42001 schreibt keinen Mindestumfang für die KI-Policy vor. Detaillierte Risiken gehören ins Risikoregister – die Policy setzt den strategischen Rahmen. Gefordert sind: Kontext-Angemessenheit, Ziel-Rahmen, Compliance-Verpflichtung, Verbesserungspflicht und GF-Unterschrift.",
reference:"Modul 6 – ISO/IEC 42001 – KI-Managementsystem"},

// ─── MODUL 7 – EU AI Act ──────────────────────────────────────────────────────
{id:69,module:7,type:1,question:"Welche der 8 Kategorien des Anhangs III EU AI Act ist für SmartHire relevant?",
answers:[
{id:"A",text:"Anhang III Nr. 1 – Biometrische Identifikation und Kategorisierung.",correct:false},
{id:"B",text:"Anhang III Nr. 3 – Bildung und Berufsorientierung (Schulzuweisung, Noten).",correct:false},
{id:"C",text:"Anhang III Nr. 8 – Zugang zu privaten Diensten (Kredite, Versicherungen).",correct:false},
{id:"D",text:"Anhang III Nr. 4a – Personalauswahl, Kündigung und Arbeitsbedingungen.",correct:true}],
explanation:"SmartHire ist ein CV-Scoring-System für Personalauswahl – das fällt explizit unter Anhang III Nr. 4 (Beschäftigung, Personalmanagement), konkret Buchstabe a (Einstellung, Beförderung, Kündigung).",
reference:"Modul 7 – EU AI Act"},

{id:70,module:7,type:3,question:"SmartHire analysiert Profilfotos von Bewerbern, um deren emotionalen Zustand einzuschätzen und das Ranking zu beeinflussen. Wie ist das nach EU AI Act zu beurteilen?",
answers:[
{id:"A",text:"Ja, verboten – Art. 5 Abs. 1 lit. f verbietet KI-Systeme zur Emotionserkennung im Beschäftigungskontext. Das ist eine verbotene Praktik ohne Ausnahmemöglichkeit.",correct:true},
{id:"B",text:"Nein, zulässig – Emotionserkennung ist nur verboten, wenn sie für Kreditentscheidungen genutzt wird.",correct:false},
{id:"C",text:"Nein, zulässig – sofern die Bewerber informiert werden, ist Emotionserkennung im Bewerbungsprozess erlaubt.",correct:false},
{id:"D",text:"Ja, verboten – aber nur, wenn die Analyse zu einem Nachteil für mehr als 10 % der Bewerber führt.",correct:false}],
explanation:"Art. 5 Abs. 1 lit. f verbietet KI-Systeme zur Emotionserkennung am Arbeitsplatz und bei Bildungseinrichtungen explizit und absolut. Informierte Einwilligung ändert daran nichts – das Verbot gilt unabhängig von Zustimmung oder Ergebnisquote.",
reference:"Modul 7 – EU AI Act"},

{id:71,module:7,type:4,negativeHighlight:true,question:"Welche Aussage zu den verbotenen KI-Praktiken (Art. 5 EU AI Act) ist NICHT korrekt?",
answers:[
{id:"A",text:"Manipulation von Verhalten durch unbewusste Techniken (Art. 5 Abs. 1 lit. a) ist verboten.",correct:false},
{id:"B",text:"Verbotene KI-Praktiken können durch ein Genehmigungsverfahren der nationalen KI-Behörde ausnahmsweise erlaubt werden.",correct:true},
{id:"C",text:"Social Scoring durch öffentliche Behörden (Art. 5 Abs. 1 lit. c) ist verboten.",correct:false},
{id:"D",text:"Die Exploitierung von Vulnerabilitäten (z. B. gezielte Täuschung älterer Menschen, Art. 5 Abs. 1 lit. b) ist verboten.",correct:false}],
explanation:"Die Verbote des Art. 5 sind absolut – es gibt kein Ausnahmeverfahren. Das unterscheidet sie von Hochrisiko-KI (Art. 6), die unter strengen Auflagen erlaubt ist. Verbotene Praktiken können nicht durch Behörden oder Nutzer genehmigt werden.",
reference:"Modul 7 – EU AI Act"},

{id:72,module:7,type:2,question:"Welche Aussage zu den Bußgeldern des EU AI Acts (Art. 99) ist vollständig korrekt?",
answers:[
{id:"A",text:"Verstöße gegen Betreiberpflichten (Art. 26) werden mit bis zu 6 % des globalen Jahresumsatzes geahndet – dem höchsten Bußgeldrahmen.",correct:false},
{id:"B",text:"Für Verstöße gegen verbotene KI-Praktiken (Art. 5) drohen Bußgelder bis zu 4 % des globalen Jahresumsatzes.",correct:false},
{id:"C",text:"Für verbotene KI-Praktiken (Art. 5): bis zu 6 % Jahresumsatz oder 30 Mio. EUR (je höher); für QMS/Dokumentationsmängel: bis zu 4 %; für Betreiberpflichtverstöße (Art. 26): bis zu 2 %.",correct:true},
{id:"D",text:"Der EU AI Act sieht ausschließlich Bußgelder vor; strafrechtliche Konsequenzen sind nicht möglich.",correct:false}],
explanation:"Die drei Bußgeldebenen: 6 %/30 Mio. für verbotene Praktiken (Art. 5), 4 % für QMS/Dokumentation (Art. 17/11), 2 % für Betreiberpflichtverstöße (Art. 26). Jeweils der höhere Betrag gilt. Strafrechtliche Konsequenzen können zusätzlich durch nationales Recht entstehen.",
reference:"Modul 7 – EU AI Act"},

{id:73,module:7,type:1,question:"Was bedeutet 'GPAI' im EU AI Act und welches System in SmartHire fällt darunter?",
answers:[
{id:"A",text:"GPAI = General Purpose AI (KI mit allgemeinem Verwendungszweck); Ollama (Meta Llama-Modell) ist ein GPAI-Modell nach Art. 3 Nr. 63 EU AI Act.",correct:true},
{id:"B",text:"GPAI = Government-Approved AI; nur von staatlichen Stellen zugelassene KI-Systeme fallen darunter.",correct:false},
{id:"C",text:"GPAI ist eine Bezeichnung für KI-Systeme, die in mehr als 5 EU-Ländern eingesetzt werden.",correct:false},
{id:"D",text:"GPAI-Systeme sind nach EU AI Act verboten, da sie für beliebige Zwecke eingesetzt werden können.",correct:false}],
explanation:"GPAI (General Purpose AI) nach Art. 3 Nr. 63 sind Modelle mit allgemeinem Verwendungszweck – z. B. ChatGPT, Claude, oder Ollama/Meta Llama. Sie haben eigene Pflichten (Art. 51, 53). Als Betreiber muss die Muster GmbH darauf vertrauen, dass Meta die GPAI-Compliance erfüllt.",
reference:"Modul 7 – EU AI Act"},

{id:74,module:7,type:3,question:"8 Monate nach Go-Live erkennt HR, dass weibliche Bewerberinnen systematisch 20 % niedrigere Scores erhalten. Welche Schritte sind vorgeschrieben?",
answers:[
{id:"A",text:"Zuerst das System abschalten, dann Ursachenanalyse, dann Meldung an Behörden.",correct:false},
{id:"B",text:"Zuerst intern untersuchen, ob das Problem tatsächlich existiert (mindestens 6 Monate Analyse), dann melden.",correct:false},
{id:"C",text:"Zuerst DSGVO Art. 33 (72 h) melden, dann EU AI Act Art. 73 (15 Tage), dann System abschalten.",correct:false},
{id:"D",text:"Schwerwiegenden Vorfall unverzüglich an den Anbieter melden (Art. 26 Abs. 4). Meldung an Marktüberwachungsbehörde innerhalb 15 Tage (Art. 73). Parallel DSGVO Art. 33 (72 h) prüfen.",correct:true}],
explanation:"Art. 26 Abs. 4 verpflichtet den Betreiber, schwerwiegende Vorfälle unverzüglich an den Anbieter zu melden. Art. 73 gibt 15 Tage für die Behördenmeldung bei Diskriminierung. DSGVO Art. 33 (72 h) ist parallel zu prüfen – hier liegt primär ein Bias-Vorfall vor.",
reference:"Modul 7 – EU AI Act"},

{id:75,module:7,type:1,question:"Was fordert Art. 26 Abs. 2 EU AI Act konkret von der Muster GmbH bezüglich menschlicher Aufsicht über SmartHire?",
answers:[
{id:"A",text:"Art. 26 Abs. 2 verlangt nur, dass ein Mensch die Entscheidung formal genehmigt; fachliche Qualifikation ist nicht geregelt.",correct:false},
{id:"B",text:"Art. 26 Abs. 2 verlangt, dass die für die Aufsicht zuständigen Personen fachlich kompetent sind und die Möglichkeit haben, das System zu übersteuern (Override-Möglichkeit).",correct:true},
{id:"C",text:"Human-in-the-Loop ist gesetzlich definiert und entspricht exakt den Anforderungen von Art. 26 Abs. 2.",correct:false},
{id:"D",text:"Art. 26 Abs. 2 erlaubt es, die menschliche Aufsicht vollständig durch automatische Monitoring-Systeme zu ersetzen.",correct:false}],
explanation:"Art. 26 Abs. 2 definiert spezifische Anforderungen: kompetente Personen (Schulungspflicht Art. 4 + Art. 26 Abs. 6) und technisch mögliche Override-Option. Eine formale Zustimmung ohne Verständnis der KI-Logik erfüllt die Anforderung nicht.",
reference:"Modul 7 – EU AI Act"},

{id:76,module:7,type:4,negativeHighlight:true,question:"Welche Aussage zur technischen Dokumentation nach Art. 11 + Anhang IV EU AI Act ist NICHT korrekt?",
answers:[
{id:"A",text:"Die technische Dokumentation muss Trainingsdaten, Qualitätskontrolle, Testverfahren und das Risikomanagementsystem umfassen.",correct:false},
{id:"B",text:"Der Anbieter muss dem Betreiber Informationen bereitstellen, die dieser für eine DSFA nach DSGVO Art. 35 benötigt (Art. 26 Abs. 9 EU AI Act).",correct:false},
{id:"C",text:"Die technische Dokumentation nach Art. 11 muss vom Betreiber (Deployer) erstellt werden, nicht vom Anbieter.",correct:true},
{id:"D",text:"Die Betriebsanleitung ist Teil der technischen Dokumentation und richtet sich an den Betreiber.",correct:false}],
explanation:"Art. 11 und Anhang IV ist eine Anbieterpflicht (Provider). Der Anbieter erstellt die technische Dokumentation und stellt dem Betreiber die nötigen Informationen zur Verfügung (Art. 26 Abs. 9). Der Betreiber prüft, ob die Dokumentation vorliegt – er erstellt sie nicht.",
reference:"Modul 7 – EU AI Act"},

{id:77,module:7,type:2,question:"Welche Aussage zum Konformitätsbewertungsverfahren (Art. 43 EU AI Act) ist vollständig korrekt?",
answers:[
{id:"A",text:"Für alle Hochrisiko-KI-Systeme ist zwingend eine notifizierte Stelle (Dritter) zur Konformitätsbewertung einzuschalten.",correct:false},
{id:"B",text:"Die interne Konformitätsbewertung nach Art. 43 Abs. 2 ist nur erlaubt, wenn das System nicht in Anhang III gelistet ist.",correct:false},
{id:"C",text:"Die EU-Konformitätserklärung (Art. 47) ist dasselbe Dokument wie die CE-Kennzeichnung (Art. 48) – beide können durch ein einzelnes Formular erfüllt werden.",correct:false},
{id:"D",text:"Die interne Konformitätsbewertung (Art. 43 Abs. 2) ist der Standardweg für die meisten Hochrisiko-KI-Systeme; notifizierte Stellen werden nur ausnahmsweise eingeschaltet.",correct:true}],
explanation:"Die notifizierte Stelle ist die Ausnahme, nicht die Regel. Standardweg ist die interne Konformitätsbewertung anhand harmonisierter Normen (Art. 43 Abs. 2). Konformitätserklärung (Dokument) und CE-Kennzeichnung (Zeichen) sind separate Pflichten – Art. 47 vs. Art. 48.",
reference:"Modul 7 – EU AI Act"},

{id:78,module:7,type:1,question:"Welche Pflicht gilt nach EU AI Act für GPAI-Anbieter (Art. 53) bezüglich des Urheberrechts?",
answers:[
{id:"A",text:"GPAI-Anbieter müssen eine Strategie zur Einhaltung des EU-Urheberrechts einführen und Rechtsvorbehalte nach DSM-RL Art. 4(3) beachten.",correct:true},
{id:"B",text:"GPAI-Anbieter müssen alle Urheberrechte an den Trainingsdaten vollständig erwerben, bevor das Modell trainiert werden darf.",correct:false},
{id:"C",text:"Das EU-Urheberrecht gilt nicht für KI-Trainingsdaten – GPAI-Anbieter sind davon ausgenommen.",correct:false},
{id:"D",text:"Als Betreiber von GPAI muss die Muster GmbH die Urheberrechts-Compliance für Ollama selbst sicherstellen.",correct:false}],
explanation:"Art. 53 EU AI Act verpflichtet GPAI-Anbieter (wie Meta) zur Urheberrechts-Compliance-Strategie. Als Betreiber (Muster GmbH) vertraut man darauf, dass Meta diese Pflichten erfüllt – die Betreiberpflicht bezieht sich auf eigene Inhalte, nicht auf das Grundmodell.",
reference:"Modul 7 – EU AI Act"},

{id:79,module:7,type:3,question:"Als Betreiber prüft die Muster GmbH, ob SmartHire korrekt in Verkehr gebracht wurde. Welche drei Nachweise muss der Anbieter vorlegen?",
answers:[
{id:"A",text:"DSGVO-Einwilligungserklärung, technische Dokumentation und Datenschutzerklärung.",correct:false},
{id:"B",text:"EU-Konformitätserklärung (Art. 47), CE-Kennzeichnung (Art. 48) und Registrierung in der EU-KI-Datenbank (Art. 49).",correct:true},
{id:"C",text:"ISO 42001-Zertifikat, notifizierte Stelle Prüfbericht und CE-Kennzeichnung.",correct:false},
{id:"D",text:"Betriebsanleitung, Schulungsnachweis für HR-Team und Risikoregister.",correct:false}],
explanation:"Die drei Nachweise für korrekte Konformität sind: Konformitätserklärung (Art. 47), CE-Kennzeichnung (Art. 48) und EU-KI-Datenbank-Registrierung (Art. 49). Als Betreiber prüft die Muster GmbH, ob der Anbieter diese Pflichten erfüllt hat.",
reference:"Modul 7 – EU AI Act"},

{id:80,module:7,type:4,negativeHighlight:true,question:"Welche Aussage zur Marktaufsicht (Art. 70–74 EU AI Act) ist NICHT korrekt?",
answers:[
{id:"A",text:"Nationale Marktüberwachungsbehörden haben die Befugnis, Hochrisiko-KI-Systeme zu inspizieren und bei Nicht-Compliance zu untersagen.",correct:false},
{id:"B",text:"Betreiber müssen schwerwiegende Vorfälle bei Hochrisiko-KI an den Anbieter und ggf. die Behörde melden (Art. 73).",correct:false},
{id:"C",text:"Das EU AI Office ist für die Marktaufsicht aller Hochrisiko-KI-Systeme in den Mitgliedstaaten zuständig – nationale Behörden haben keine eigene Aufsichtskompetenz.",correct:true},
{id:"D",text:"Post-Market Surveillance (Art. 72) verpflichtet Anbieter zur laufenden Überwachung nach Markteinführung.",correct:false}],
explanation:"Die Marktaufsicht über Hochrisiko-KI liegt bei nationalen Marktüberwachungsbehörden (Art. 70). Das EU AI Office überwacht primär GPAI-Modelle und koordiniert auf EU-Ebene. Nationale Behörden haben eigenständige Aufsichtskompetenz für Hochrisiko-KI.",
reference:"Modul 7 – EU AI Act"},

// ─── MODUL 1 – Multi-Correct (Q81-83) ────────────────────────────────────────
{id:81,module:1,type:1,question:"Welche zwei Aussagen treffen auf die grundlegenden Grenzen von LLMs korrekt zu? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"LLMs können keine gesicherten Fakten garantieren, da sie Wahrscheinlichkeiten berechnen – plausibel klingende, aber sachlich falsche Ausgaben (Halluzinationen) sind strukturell möglich.",correct:true},
{id:"B",text:"LLMs sind nicht deterministisch: Dieselbe Eingabe kann bei verschiedenen Aufrufen unterschiedliche Ausgaben produzieren, was vollständige Reproduzierbarkeit strukturell ausschließt.",correct:true},
{id:"C",text:"LLMs lernen kontinuierlich aus Nutzerinteraktionen und aktualisieren ihr Modell automatisch nach jeder Eingabe.",correct:false},
{id:"D",text:"LLMs verarbeiten ausschließlich vortrainiertes Wissen – sie können grundsätzlich keine Werkzeuge oder externen Datenquellen einbinden.",correct:false}],
explanation:"LLMs berechnen das wahrscheinlichste nächste Token statt Fakten abzurufen – das erzeugt Halluzinationen. Zudem sind sie nicht deterministisch: gleiche Eingabe, potenziell unterschiedliche Ausgaben. LLMs lernen NICHT kontinuierlich aus Nutzereingaben und können durch Tool-Anbindung externe Datenquellen nutzen.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:82,module:1,type:3,question:"SmartHire soll für sicherheitskritische Einzelentscheidungen auf Führungsebene eingesetzt werden – nur 50 Fälle pro Monat, maximale Entscheidungsqualität ist wichtiger als Durchsatz. Welche zwei Prompting-Methoden eignen sich hier am besten?",
answers:[
{id:"A",text:"Zero-Shot und Few-Shot kombiniert – zusammen decken sie alle Anforderungen zuverlässig ab.",correct:false},
{id:"B",text:"Chain-of-Thought (CoT) – macht Entscheidungsschritte nachvollziehbar und reduziert Fehler bei komplexen Urteilen.",correct:true},
{id:"C",text:"Automatisiertes Batch-Processing mit Temperatursenkung auf 0 – sichert Konsistenz bei niedrigem Aufwand.",correct:false},
{id:"D",text:"Self-Consistency – derselbe Prompt wird mehrfach ausgeführt, der Mehrheitsentscheid erhöht die Verlässlichkeit bei kritischen Einzelentscheidungen.",correct:true}],
explanation:"Bei sicherheitskritischen Einzelentscheidungen bieten CoT (nachvollziehbare Zwischenschritte, Fehlerreduktion) und Self-Consistency (Mehrheitsentscheid aus mehreren Durchläufen) die höchste Entscheidungsqualität. Zero-Shot liefert inkonsistente Ergebnisse; Batch-Processing ist für Massenverarbeitung optimiert, nicht für Einzelfallqualität.",
reference:"Modul 1 – Kommunikation & Prompting"},

{id:83,module:1,type:4,negativeHighlight:true,question:"Welche zwei der folgenden Aussagen zur Qualität von Prompts sind NICHT korrekt?",
answers:[
{id:"A",text:"Ein guter Prompt muss so kurz wie möglich sein – Kürze ist das wichtigste Merkmal für optimale KI-Ausgaben.",correct:true},
{id:"B",text:"Spezifische, präzise Anweisungen verbessern die Ausgabequalität nachweislich und sind ein wesentliches Merkmal starker Prompts.",correct:false},
{id:"C",text:"Das Format-Element (F) der R-A-K-F-Methode definiert, wie die Ausgabe strukturiert sein soll, z. B. als Tabelle, Liste oder Fließtext.",correct:false},
{id:"D",text:"Transparenz im Prompt ist optional – eine gut trainierte KI erkennt implizite Anforderungen automatisch und zuverlässig.",correct:true}],
explanation:"A ist falsch: Kürze allein ist kein Qualitätsmerkmal – starke Prompts brauchen oft Kontext, Beispiele und detaillierte Anweisungen. D ist falsch: Transparenz ist kein optionaler Zusatz, sondern ein wesentliches Merkmal starker Prompts – KI erkennt implizite Anforderungen nicht zuverlässig. B und C sind korrekte Aussagen.",
reference:"Modul 1 – Kommunikation & Prompting"},

// ─── MODUL 2 – Multi-Correct (Q84-86) ────────────────────────────────────────
{id:84,module:2,type:1,question:"Welche zwei DSGVO-Artikel sind für SmartHire als automatisiertes Bewerbungsbewertungssystem besonders zentral? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Art. 6 DSGVO – jede Verarbeitung personenbezogener Daten bedarf einer Rechtsgrundlage (z. B. Vertragserfüllung oder berechtigtes Interesse).",correct:true},
{id:"B",text:"Art. 22 DSGVO – schützt Betroffene vor rein automatisierten Entscheidungen mit erheblicher Auswirkung und setzt eine menschliche Überprüfungsmöglichkeit voraus.",correct:true},
{id:"C",text:"Art. 30 DSGVO – verpflichtet Organisationen zur Erstellung eines Datenschutz-Notfallplans für den Fall von Cyberangriffen.",correct:false},
{id:"D",text:"Art. 9 DSGVO – verbietet die Verarbeitung besonderer Datenkategorien generell und ist auf Bewerbungsverfahren nicht anwendbar.",correct:false}],
explanation:"Art. 6 DSGVO ist die Grundvoraussetzung jeder Datenverarbeitung (Rechtsgrundlagenpflicht). Art. 22 DSGVO schützt vor rein automatisierten Entscheidungen ohne menschliche Eingriffsmöglichkeit – direkt relevant für SmartHire. Art. 30 ist das Verarbeitungsverzeichnis, kein Notfallplan. Art. 9 kann in Bewerbungsverfahren relevant sein (z. B. Gesundheitsdaten).",
reference:"Modul 2 – Rechtliche Grundlagen"},

{id:85,module:2,type:3,question:"Die Muster GmbH plant, SmartHire über einen externen KI-Dienstleister zu betreiben, der Bewerberdaten auf seinen Servern verarbeitet. Welche zwei rechtlichen Schritte sind vor dem Einsatz zwingend erforderlich?",
answers:[
{id:"A",text:"Abschluss eines Auftragsverarbeitungsvertrags (AVV) nach Art. 28 DSGVO mit dem externen Dienstleister.",correct:true},
{id:"B",text:"Durchführung einer Datenschutz-Folgenabschätzung (DSFA) nach Art. 35 DSGVO, da systematische Bewerberdatenverarbeitung mit erheblichen Risiken vorliegt.",correct:true},
{id:"C",text:"Einholung einer behördlichen Genehmigung beim Bundesbeauftragten für Datenschutz, bevor Bewerberdaten verarbeitet werden dürfen.",correct:false},
{id:"D",text:"Veröffentlichung des Algorithmus-Quellcodes, damit Bewerberinnen und Bewerber die Entscheidungslogik selbst überprüfen können.",correct:false}],
explanation:"Externe Datenverarbeitung macht einen AVV (Art. 28 DSGVO) zwingend notwendig. Die systematische Verarbeitung sensibler Bewerberdaten durch Hochrisiko-KI löst die DSFA-Pflicht aus (Art. 35 DSGVO). Eine Vorab-Genehmigung ist nicht vorgesehen – es gibt nur die Konsultationspflicht (Art. 36) bei nicht beherrschbarem Restrisiko. Quellcode-Veröffentlichung ist keine gesetzliche Pflicht.",
reference:"Modul 2 – Rechtliche Grundlagen"},

{id:86,module:2,type:2,question:"Welche zwei Aussagen zur rechtlichen Lage beim KI-Einsatz in der Personalauswahl sind vollständig korrekt?",
answers:[
{id:"A",text:"Art. 22 DSGVO ist nur relevant, wenn keinerlei Mensch am Entscheidungsprozess beteiligt ist – ein kurzer formaler Review reicht aus, um die Anforderungen vollständig zu erfüllen.",correct:false},
{id:"B",text:"KI-gestützte Personalauswahl unterliegt ausschließlich dem EU AI Act – das AGG und die DSGVO sind auf algorithmische Systeme nicht anwendbar.",correct:false},
{id:"C",text:"Das Allgemeine Gleichbehandlungsgesetz (AGG) gilt auch für KI-gestützte Auswahlentscheidungen – das Unternehmen bleibt haftbar, auch wenn die Diskriminierung durch einen Algorithmus verursacht wird.",correct:true},
{id:"D",text:"Art. 13 DSGVO verpflichtet Arbeitgeber, Bewerberinnen und Bewerber zu informieren, bevor deren Daten durch KI-Systeme verarbeitet werden.",correct:true}],
explanation:"AGG und DSGVO gelten kumulativ neben dem EU AI Act. C ist korrekt: AGG-Haftung entfällt nicht durch KI-Einsatz. D ist korrekt: Art. 13 DSGVO schreibt Informationspflicht VOR Verarbeitungsbeginn vor. A enthält einen widerlegenden Zusatz: ein oberflächlicher formaler Review erfüllt Art. 22 DSGVO nicht – die menschliche Überprüfung muss substanziell sein.",
reference:"Modul 2 – Rechtliche Grundlagen"},

// ─── MODUL 3 – Multi-Correct (Q87-89) ────────────────────────────────────────
{id:87,module:3,type:1,question:"Welche zwei Aussagen zum Risikomanagement-Prozess nach ISO 31000 sind korrekt? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Risiken müssen erst nach dem Go-Live eines KI-Systems systematisch identifiziert werden, da vorher keine realen Betriebsdaten vorliegen.",correct:false},
{id:"B",text:"Risikoakzeptanz bedeutet, dass das akzeptierte Risiko dauerhaft ignoriert werden kann und keine weitere Überwachung mehr notwendig ist.",correct:false},
{id:"C",text:"Die Risikobehandlung umfasst vier gleichwertige Optionen: Vermeiden, Mindern, Übertragen und Akzeptieren – die Wahl hängt von Kontext und Risikobewertung ab.",correct:true},
{id:"D",text:"Das Risiko wird als Produkt aus Eintrittswahrscheinlichkeit (E) und Schadensschwere (S) berechnet: R = E x S.",correct:true}],
explanation:"ISO 31000 definiert R = E x S als Grundformel. Die vier Risikobehandlungsoptionen (Vermeiden, Mindern, Übertragen, Akzeptieren) sind gleichwertige strategische Entscheidungen je nach Risikobewertung. Risiken müssen FRÜHZEITIG – bereits in der Konzeptphase – identifiziert werden. Risikoakzeptanz schließt laufende Überwachung nicht aus.",
reference:"Modul 3 – Risikomanagement"},

{id:88,module:3,type:3,question:"Die Risikoanalyse für SmartHire ergibt: Gender-Bias hat eine Eintrittswahrscheinlichkeit von 20 % und eine Schadensschwere von 5 (Grundrechtsverletzung), damit R = 100. Welche zwei Risikobehandlungsmaßnahmen sind vorrangig angemessen?",
answers:[
{id:"A",text:"Vollständige Abschaltung des Systems (Risikovermeidung) – bei R = 100 ist jeder weitere Einsatz rechtlich unzulässig.",correct:false},
{id:"B",text:"Risikoakzeptanz: Da 80 % der Entscheidungen korrekt sind, ist das Restrisiko ohne weitere Maßnahmen vertretbar.",correct:false},
{id:"C",text:"Gezieltes Bias-Testing mit repräsentativen Testdaten, um die Diskriminierungswahrscheinlichkeit aktiv zu senken (Risikominderung).",correct:true},
{id:"D",text:"Menschliche Überprüfung aller KI-Entscheidungen vor der finalen Auswahl, um direkte Grundrechtsverletzungen zu verhindern (Risikominderung durch Kontrolle).",correct:true}],
explanation:"Bei Grundrechtsverletzungen (Schwere = 5) sind Bias-Testing (senkt die Wahrscheinlichkeit) und menschliche Aufsicht (verhindert die direkte Wirkung fehlerhafter Entscheidungen) die vorrangigen Maßnahmen. Vollständige Abschaltung ist nicht zwingend, wenn wirksame Risikominderung möglich ist. Risikoakzeptanz ohne Gegenmaßnahmen ist bei Grundrechtsverletzungen nicht vertretbar.",
reference:"Modul 3 – Risikomanagement"},

{id:89,module:3,type:4,negativeHighlight:true,question:"Welche zwei der folgenden Aussagen zur Datenschutz-Folgenabschätzung (DSFA) nach Art. 35 DSGVO sind NICHT korrekt?",
answers:[
{id:"A",text:"Die DSFA-Pflicht besteht erst ab einer Mindestanzahl von 1.000 betroffenen Personen – kleinere Systeme sind von der Pflicht automatisch ausgenommen.",correct:true},
{id:"B",text:"Die DSFA muss vor Beginn der Datenverarbeitung durchgeführt werden – eine nachträgliche DSFA erfüllt die gesetzlichen Anforderungen nicht.",correct:false},
{id:"C",text:"Das AIMS-Assessment nach ISO 42001 Kap. 6.1.4 und die DSFA nach Art. 35 DSGVO haben denselben Prüfumfang – beide Assessments sind inhaltlich identisch.",correct:true},
{id:"D",text:"SmartHire als Hochrisiko-KI in der Personalauswahl löst die DSFA-Pflicht aus, da eine systematische Verarbeitung sensibler Bewerberdaten mit erheblichen Risiken vorliegt.",correct:false}],
explanation:"A ist falsch: Die DSFA-Pflicht hängt nicht von einer Personenzahl-Schwelle ab, sondern von der Risikoart der Verarbeitung (Art. 35 DSGVO). C ist falsch: Das AIMS-Assessment ist BREITER als die DSFA – es umfasst auch gesellschaftliche Auswirkungen, Marktverzerrung und Autonomieverlust, die über reinen Datenschutz hinausgehen.",
reference:"Modul 3 – Risikomanagement"},

// ─── MODUL 4 – Multi-Correct (Q90-92) ────────────────────────────────────────
{id:90,module:4,type:1,question:"Welche zwei Maßnahmen schreibt der EU AI Act für Hochrisiko-KI-Systeme im Bereich Qualitätssicherung ausdrücklich vor? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Automatisches Logging aller signifikanten Ereignisse und Entscheidungen durch das KI-System (Art. 12 EU AI Act).",correct:true},
{id:"B",text:"Monatliche externe Audits durch eine zugelassene Prüforganisation – dies gilt ohne Ausnahme für alle Hochrisiko-KI-Systeme.",correct:false},
{id:"C",text:"Kontinuierliche Post-Market Surveillance nach der Markteinführung zur Erkennung von Drift und Leistungsabfall (Art. 72 EU AI Act).",correct:true},
{id:"D",text:"Veröffentlichung aller Bias-Prüfprotokolle und Testergebnisse auf einer öffentlich zugänglichen EU-Plattform.",correct:false}],
explanation:"Art. 12 EU AI Act schreibt automatisches Logging vor; Art. 72 verpflichtet zur Post-Market Surveillance nach Go-Live. Monatliche externe Audits sind nicht generell vorgeschrieben – Umfang und Häufigkeit hängen vom Konformitätsbewertungsverfahren ab. Testergebnisse müssen dokumentiert, aber nicht öffentlich veröffentlicht werden.",
reference:"Modul 4 – Projektmanagement & QS"},

{id:91,module:4,type:3,question:"SmartHire hat alle technischen Funktionstests erfolgreich durchlaufen. Welche zwei abschließenden QS-Schritte fehlen noch vor dem Go-Live?",
answers:[
{id:"A",text:"Deployment auf dem Produktionsserver – der technische Abschlussschritt, der das System offiziell in Betrieb setzt.",correct:false},
{id:"B",text:"User Acceptance Testing (UAT) mit HR-Mitarbeitenden, die das System in realistischen Alltagsszenarien testen und Praxisprobleme identifizieren.",correct:true},
{id:"C",text:"Rückmeldung aller gefundenen Fehler an das Entwicklungsteam zur finalen Korrektur – dieser Schritt kommt zuletzt.",correct:false},
{id:"D",text:"Erstellung eines Abnahmeprotokolls, das die Erfüllung aller SMART-Akzeptanzkriterien dokumentiert und als Nachweis für spätere Audits dient.",correct:true}],
explanation:"UAT stellt sicher, dass Endnutzer (HR) das System akzeptieren und Praxisprobleme erkannt werden, die technische Tests übersehen. Das Abnahmeprotokoll dokumentiert, dass alle SMART-Kriterien erfüllt sind – Grundlage für Audits nach Art. 17 EU AI Act. Deployment und Bug-Fixes sind frühere Prozessschritte.",
reference:"Modul 4 – Projektmanagement & QS"},

{id:92,module:4,type:2,question:"Welche zwei Aussagen zum Qualitätsmanagementsystem (QMS) für Hochrisiko-KI nach EU AI Act und ISO 42001 sind vollständig korrekt?",
answers:[
{id:"A",text:"Ein QMS für Hochrisiko-KI muss Bias-Testing mit dokumentierter Methodik, verwendeten Testdaten und definierten Akzeptanzschwellen umfassen.",correct:true},
{id:"B",text:"Die Qualitätssicherung endet mit dem Go-Live – danach ist die QS-Verantwortung vollständig auf den Betreiber übergegangen, der Anbieter ist damit entlastet.",correct:false},
{id:"C",text:"Die Implementierung von ISO 42001 erfüllt normkonform die QMS-Anforderungen aus Art. 17 EU AI Act für Hochrisiko-KI-Anbieter.",correct:true},
{id:"D",text:"SMART-Akzeptanzkriterien sind empfehlenswert, aber nicht verpflichtend, da der EU AI Act keine konkreten Testmetriken vorschreibt.",correct:false}],
explanation:"Bias-Testing als dokumentierter QS-Bestandteil und die Gleichsetzung ISO 42001 = Art. 17 QMS sind korrekt. B enthält einen widerlegenden Zusatz: QS endet NICHT mit Go-Live – Art. 72 EU AI Act verpflichtet zur kontinuierlichen Post-Market Surveillance. D ist falsch: SMART-Kriterien sind für die Nachweisbarkeit der Konformität normativ notwendig.",
reference:"Modul 4 – Projektmanagement & QS"},

// ─── MODUL 5 – Multi-Correct (Q93-95) ────────────────────────────────────────
{id:93,module:5,type:1,question:"Welche zwei Datenqualitätsdimensionen sind für KI-Trainingsdaten besonders kritisch und im EU AI Act Art. 10(3) sowie ISO 42001 A.7.4 verankert? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Dateigröße – größere Trainingsdatensätze sind grundsätzlich repräsentativer und erfüllen automatisch die gesetzlichen Qualitätsanforderungen.",correct:false},
{id:"B",text:"Repräsentativität – das Trainingsdataset muss die Zielpopulation ohne strukturellen Bias abbilden, z. B. kein Übergewicht historisch bevorzugter Gruppen.",correct:true},
{id:"C",text:"Aktualität – veraltete Daten (z. B. Berufsbezeichnungen aus dem Jahr 2008) verzerren das Modellverhalten und verstoßen gegen Art. 5(1d) DSGVO.",correct:true},
{id:"D",text:"Verschlüsselungsstärke – alle Trainingsdaten müssen nach einem definierten Standard verschlüsselt sein, um die Datenqualitätsanforderungen zu erfüllen.",correct:false}],
explanation:"Repräsentativität (kein struktureller Bias, z. B. 73 % männliche historische Kandidaten) und Aktualität (keine veralteten Daten) sind KI-spezifische Pflichtdimensionen nach Art. 10(3) EU AI Act und ISO 42001 A.7.4. Dateigröße ist kein gesetzliches Qualitätsmerkmal. Verschlüsselung ist eine Sicherheits-, keine Datenqualitätsdimension.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:94,module:5,type:3,question:"Die Muster GmbH startet Phase 1 (Monate 1–2) des Change-Managements für SmartHire mit dem Ziel, Bewusstsein und Akzeptanz zu schaffen. Welche zwei Maßnahmen gehören in diese Phase?",
answers:[
{id:"A",text:"Sofortiger Pflicht-Rollout auf alle Standorte, damit alle Mitarbeitenden gleichzeitig starten und keine Informationsasymmetrien entstehen.",correct:false},
{id:"B",text:"Transparente Kommunikation durch die Geschäftsführung über Chancen UND Risiken von SmartHire – einschließlich offener Adressierung von Mitarbeiterängsten.",correct:true},
{id:"C",text:"Bereitstellung von FAQ-Dokumenten und offenen Gesprächsformaten (z. B. Town Halls), um Fragen und Bedenken der Belegschaft aufzugreifen.",correct:true},
{id:"D",text:"Einrichtung eines Pilot-Teams aus 5 HR-Mitarbeitenden mit wöchentlichem Feedback-Zyklus zur Systembewertung.",correct:false}],
explanation:"Phase 1 (Awareness) fokussiert auf Kommunikation und Bewusstseinsbildung: GF-Kommunikation (transparent, inkl. Risiken) und FAQ/Town Halls für die Belegschaft. Das Pilot-Team mit Feedback-Zyklen gehört zu Phase 2 (Pilot, Monate 3–5). Ein sofortiger Pflicht-Rollout widerspricht dem schrittweisen Change-Management-Ansatz.",
reference:"Modul 5 – Daten- & Change-Management"},

{id:95,module:5,type:4,negativeHighlight:true,question:"Welche zwei der folgenden Aussagen zu Data Governance für Hochrisiko-KI sind NICHT korrekt?",
answers:[
{id:"A",text:"Data Owner und Data Steward sind zwei klar getrennte Rollen: Der Data Owner trägt die fachliche Verantwortung, der Data Steward die operative Datenqualitätsverantwortung.",correct:false},
{id:"B",text:"Data Governance ist bei Hochrisiko-KI optional, sofern die DSGVO-Konformität durch ein Datenschutzaudit nachgewiesen wird.",correct:true},
{id:"C",text:"Lineage Tracking dokumentiert, woher Daten stammen und welche Transformationen sie durchlaufen haben – es ist Pflichtbestandteil der Hochrisiko-KI-Dokumentation.",correct:false},
{id:"D",text:"Ein Data-Governance-Framework kann nach dem Go-Live problemlos nachträglich eingeführt werden, ohne Auswirkungen auf den laufenden Betrieb zu haben.",correct:true}],
explanation:"B ist falsch: Data Governance ist keine Option – sie ist Voraussetzung für Hochrisiko-KI. DSGVO allein deckt nicht alle Anforderungen ab (z. B. Lineage Tracking, Repräsentativitätsprüfung). D ist falsch: Data Governance muss VOR dem Deployment etabliert sein – eine nachträgliche Einführung beeinflusst zwangsläufig den laufenden Betrieb und untergräbt die rückwirkende Nachweisbarkeit.",
reference:"Modul 5 – Daten- & Change-Management"},

// ─── MODUL 6 – Multi-Correct (Q96-98) ────────────────────────────────────────
{id:96,module:6,type:1,question:"Welche zwei Aussagen zur KI-Policy nach ISO 42001 Kap. 5.2 sind korrekt? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Die KI-Policy muss einen Rahmen für KI-Ziele setzen und ein ausdrückliches Bekenntnis zur Einhaltung rechtlicher Anforderungen enthalten.",correct:true},
{id:"B",text:"Die KI-Policy gilt ausschließlich für Hochrisiko-KI-Systeme – für KI mit minimalem Risiko ist keine Policy erforderlich.",correct:false},
{id:"C",text:"Die KI-Policy muss vom Top-Management (z. B. Geschäftsführung) unterzeichnet sein – diese Verantwortung ist nicht an den KI-Beauftragten delegierbar.",correct:true},
{id:"D",text:"Die KI-Policy wird einmalig verabschiedet und muss bei Gesetzesänderungen nicht aktualisiert werden, da ISO 42001 einen stabilen Rahmen vorgibt.",correct:false}],
explanation:"Die KI-Policy muss Zielrahmen, Compliance-Bekenntnis und Verbesserungsverpflichtung enthalten (Kap. 5.2). Die Top-Management-Signatur ist nicht delegierbar (Kap. 5.1). Die Policy gilt für alle KI im definierten Scope, nicht nur Hochrisiko-KI. Sie muss versioniert und bei Änderungen der Rechtslage aktualisiert werden.",
reference:"Modul 6 – ISO/IEC 42001"},

{id:97,module:6,type:3,question:"Die Muster GmbH führt die CHECK-Phase ihres AIMS nach ISO 42001 Kap. 9 durch. Welche zwei Aktivitäten sind in dieser Phase obligatorisch?",
answers:[
{id:"A",text:"Einführung neuer KI-Systeme auf Basis der in der CHECK-Phase identifizierten Verbesserungspotenziale.",correct:false},
{id:"B",text:"Internes Audit zur Überprüfung, ob das AIMS konform zur ISO 42001 implementiert ist und alle Anforderungen erfüllt (Kap. 9.2).",correct:true},
{id:"C",text:"Schulung aller neuen Mitarbeitenden, die mit KI-Systemen arbeiten, gemäß den Kompetenzanforderungen aus Kap. 7.2.",correct:false},
{id:"D",text:"Management Review: Berichterstattung der Leistungs- und Risikobewertungsergebnisse an die Geschäftsführung (Kap. 9.3).",correct:true}],
explanation:"CHECK-Phase (Kap. 9) umfasst interne Audits (Kap. 9.2 – Konformitätsprüfung des AIMS) und Management Review (Kap. 9.3 – Berichterstattung an Führung inkl. Risikobewertungsergebnisse). Neue KI-Systeme einzuführen gehört zur ACT-Phase (Kap. 10), Schulungen zur DO-Phase (Kap. 7).",
reference:"Modul 6 – ISO/IEC 42001"},

{id:98,module:6,type:4,negativeHighlight:true,question:"Welche zwei der folgenden Aussagen zu ISO 42001 sind NICHT korrekt?",
answers:[
{id:"A",text:"ISO 42001 folgt der High Level Structure (HLS) und ist strukturell kompatibel mit ISO 9001 (Qualität) und ISO 27001 (Informationssicherheit).",correct:false},
{id:"B",text:"Das AIMS-Assessment nach ISO 42001 Kap. 6.1.4 ist enger als die DSFA nach DSGVO Art. 35 und kann diese vollständig ersetzen.",correct:true},
{id:"C",text:"ISO 42001 gilt ausschließlich für Anbieter von KI-Systemen – Betreiber sind von der Norm nicht betroffen und müssen kein AIMS aufbauen.",correct:true},
{id:"D",text:"Kap. 7.5 ISO 42001 verlangt, dass alle dokumentierten Informationen versioniert und vor Integritätsverlust sowie unberechtigtem Zugriff geschützt sind.",correct:false}],
explanation:"B ist falsch: Das AIMS-Assessment ist BREITER als die DSFA – es umfasst gesellschaftliche Auswirkungen, Marktverzerrung und Autonomieverlust und kann die DSFA nicht ersetzen. C ist falsch: ISO 42001 gilt für alle Organisationen mit KI-Beteiligung – auch Betreiber müssen ein AIMS aufbauen, sofern sie im definierten Scope sind. A und D sind korrekte Aussagen.",
reference:"Modul 6 – ISO/IEC 42001"},

// ─── MODUL 7 – Multi-Correct (Q99-102) ───────────────────────────────────────
{id:99,module:7,type:1,question:"Welche zwei Betreiberpflichten nach Art. 26 EU AI Act sind bei Hochrisiko-KI-Systemen korrekt beschrieben? (Mehrere Antworten möglich)",
answers:[
{id:"A",text:"Betreiber müssen die menschliche Aufsicht über Hochrisiko-KI-Systeme sicherstellen, damit Menschen in den Entscheidungsprozess eingreifen können (Art. 26(2)).",correct:true},
{id:"B",text:"Betreiber übernehmen automatisch alle Anbieter-Pflichten gemäß Art. 9–15 EU AI Act, sobald sie ein Hochrisiko-KI-System in ihrem Betrieb einsetzen.",correct:false},
{id:"C",text:"Betreiber müssen schwerwiegende Vorfälle dem Anbieter und der zuständigen Behörde melden – die Meldefrist nach Art. 73 EU AI Act beträgt nur zwei Tage.",correct:true},
{id:"D",text:"Betreiber sind von eigenen Protokollierungspflichten befreit, wenn der Anbieter des KI-Systems das Logging vollständig übernimmt.",correct:false}],
explanation:"Art. 26(2) EU AI Act verpflichtet Betreiber zur Sicherstellung menschlicher Aufsicht. Art. 73 setzt eine extrem kurze Meldefrist (2 Tage) für schwerwiegende Vorfälle. Betreiber übernehmen NICHT automatisch Anbieter-Pflichten (Art. 9–15) – ein Rollenwechsel nach Art. 25 ist Voraussetzung. Protokollierungspflichten können nicht vollständig delegiert werden.",
reference:"Modul 7 – EU AI Act"},

{id:100,module:7,type:3,question:"Die Muster GmbH prüft, ob der Anbieter von SmartHire (Hochrisiko-KI, Annex III Nr. 4a) seine Pflichten nach EU AI Act erfüllt hat. Welche zwei Nachweise muss sie vom Anbieter einfordern?",
answers:[
{id:"A",text:"Ein offizielles DSGVO-Compliance-Zertifikat der zuständigen Datenschutzaufsichtsbehörde als Nachweis rechtmäßiger Datenverarbeitung.",correct:false},
{id:"B",text:"Die technische Dokumentation nach Art. 11 EU AI Act i. V. m. Anhang IV mit Risikomanagement-Dokumentation, Modellarchitektur und Testdaten-Beschreibung.",correct:true},
{id:"C",text:"EU-Konformitätserklärung (Art. 47) und CE-Kennzeichnung (Art. 48) als Belege für die abgeschlossene Konformitätsbewertung des Anbieters.",correct:true},
{id:"D",text:"Nachweis einer gültigen ISO 9001-Zertifizierung des Anbieters, da diese Voraussetzung für die CE-Kennzeichnung nach EU AI Act ist.",correct:false}],
explanation:"Betreiber müssen vom Anbieter die technische Dokumentation (Art. 11 + Anhang IV) und die Konformitätsbelege einfordern: EU-Konformitätserklärung (Art. 47) und CE-Kennzeichnung (Art. 48). Ein DSGVO-Zertifikat der Aufsichtsbehörde existiert nicht in dieser Form. ISO 9001 ist keine Voraussetzung für die CE-Kennzeichnung nach EU AI Act.",
reference:"Modul 7 – EU AI Act"},

{id:101,module:7,type:4,negativeHighlight:true,question:"Welche zwei der folgenden Aussagen zu GPAI-Modellen nach EU AI Act sind NICHT korrekt?",
answers:[
{id:"A",text:"GPAI-Modelle mit systemischem Risiko sind solche, die mit mehr als 10^25 FLOP trainiert wurden oder von der EU-Kommission als solche eingestuft wurden (Art. 51).",correct:false},
{id:"B",text:"Als Betreiber eines GPAI-basierten Systems trägt die Muster GmbH die alleinige Verantwortung für die urheberrechtliche Compliance der Trainingsdaten des Grundmodells.",correct:true},
{id:"C",text:"GPAI-Anbieter mit systemischem Risiko müssen unabhängige Audits durchführen lassen und Maßnahmen gegen Missbrauch implementieren (Art. 55 EU AI Act).",correct:false},
{id:"D",text:"GPAI-Modelle fallen automatisch in die Hochrisiko-Kategorie (Anhang III) des EU AI Act, sobald sie in einem Hochrisiko-Kontext durch einen Betreiber eingesetzt werden.",correct:true}],
explanation:"B ist falsch: Die urheberrechtliche Compliance der Trainingsdaten obliegt dem GPAI-Anbieter (Art. 53 EU AI Act), nicht dem Betreiber. D ist falsch: GPAI-Modelle haben ein eigenes Regulierungsregime (Art. 51–55). Sie werden nicht automatisch zu Hochrisiko-KI nach Anhang III, wenn sie in Hochrisiko-Kontexten eingesetzt werden.",
reference:"Modul 7 – EU AI Act"},

{id:102,module:7,type:2,question:"Welche zwei Aussagen zu verbotenen KI-Praktiken nach Art. 5 EU AI Act sind vollständig korrekt?",
answers:[
{id:"A",text:"Emotionserkennung am Arbeitsplatz ist nach Art. 5(1f) EU AI Act generell verboten – unabhängig davon, ob das System nachweislich diskriminiert.",correct:true},
{id:"B",text:"Social Scoring durch staatliche Stellen ist nach Art. 5(1c) EU AI Act verboten, kann jedoch durch Prüfung einer notifizierten Stelle ausnahmsweise genehmigt werden.",correct:false},
{id:"C",text:"Subliminale Manipulation (unbewusste Verhaltensbeeinflussung ohne Wissen der betroffenen Person) ist nach Art. 5(1a) EU AI Act verboten, ohne dass ein konkreter Schaden nachgewiesen werden muss.",correct:true},
{id:"D",text:"Die Verbote nach Art. 5 EU AI Act traten erst im August 2026 in Kraft – bis dahin galten diese Praktiken unter Auflagen noch als zulässig.",correct:false}],
explanation:"A ist korrekt: Emotionserkennung am Arbeitsplatz ist generell verboten (kein Ausnahmetatbestand). C ist korrekt: Subliminale Manipulation ist ohne Schadensnachweispflicht verboten. B enthält einen widerlegenden Zusatz: Art. 5-Verbote kennen keine Ausnahme durch notifizierte Stellen – sie sind absolut. D ist falsch: Art. 5-Verbote gelten bereits seit Februar 2025.",
reference:"Modul 7 – EU AI Act"}
];
