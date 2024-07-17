import {Component, OnInit} from '@angular/core';
import {FragenService} from "../fragen.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  teilgebiete: any[] | undefined;
  selectedTeilgebiet1: any | undefined;
  selectedTeilgebiet2: any | undefined;
  selectedTeilgebiet3: any | undefined;
  selectedTeilgebiet4: any | undefined;
  selectedTeilgebiet5: any | undefined;
  selectedTeilgebiet6: any | undefined;
  selectedTeilgebiet7: any | undefined;
  selectedTeilgebiet8: any | undefined;
  selectedTeilgebiet9: any | undefined;
  selectedTeilgebiet10: any | undefined;

  textFrage1: string[] = []
  textFrage2: string[] = []
  textFrage3: string[] = []
  textFrage4: string[] = []
  textFrage5: string[] = []
  textFrage6: string[] = []
  textFrage7: string[] = []
  textFrage8: string[] = []
  textFrage9: string[] = []
  textFrage10: string[] = []

  constructor(private fragenService: FragenService) {
  }

  ngOnInit(): void {
    this.teilgebiete = [
      {
        name: 'Kein Teilgebiet ausgewählt',
        key: 'none',
      },
      {
        name: 'Vertrauen',
        key: 'vertrauen',
      },
      {
        name: 'Kontrollgefühl',
        key: 'kontrollgefuehl',
      },
      {
        name: 'Sicherheit',
        key: 'sicherheit',
      },
      {
        name: 'Korrektheit',
        key: 'korrektheit',
      },
      {
        name: 'Transparenz',
        key: 'transparenz',
      },
      {
        name: 'Vorhersehbarkeit',
        key: 'vorhersehbarkeit',
      },
      {
        name: 'Erfahrung und Bekanntheit',
        key: 'erfahrung',
      },
      {
        name: 'Zeit/Effizienz',
        key: 'zeit',
      },
      {
        name: 'Support/Updates',
        key: 'support',
      },
      {
        name: 'Komfort',
        key: 'komfort',
      },
      {
        name: 'Verfügbarkeit',
        key: 'verfuegbarkeit',
      },
    ]

    this.selectedTeilgebiet1 = this.teilgebiete[0]
    this.selectedTeilgebiet2 = this.teilgebiete[0]
    this.selectedTeilgebiet3 = this.teilgebiete[0]
    this.selectedTeilgebiet4 = this.teilgebiete[0]
    this.selectedTeilgebiet5 = this.teilgebiete[0]
    this.selectedTeilgebiet6 = this.teilgebiete[0]
    this.selectedTeilgebiet7 = this.teilgebiete[0]
    this.selectedTeilgebiet8 = this.teilgebiete[0]
    this.selectedTeilgebiet9 = this.teilgebiete[0]
    this.selectedTeilgebiet10 = this.teilgebiete[0]

    this.fragenService.getFrage1().subscribe(textFrage1 => {
      this.textFrage1 = textFrage1
    })
    this.fragenService.getFrage2().subscribe(textFrage2 => {
      this.textFrage2 = textFrage2
    })
    this.fragenService.getFrage3().subscribe(textFrage3 => {
      this.textFrage3 = textFrage3
    })
    this.fragenService.getFrage4().subscribe(textFrage4 => {
      this.textFrage4 = textFrage4
    })
    this.fragenService.getFrage5().subscribe(textFrage5 => {
      this.textFrage5 = textFrage5
    })
    this.fragenService.getFrage6().subscribe(textFrage6 => {
      this.textFrage6 = textFrage6
    })
    this.fragenService.getFrage7().subscribe(textFrage7 => {
      this.textFrage7 = textFrage7
    })
    this.fragenService.getFrage8().subscribe(textFrage8 => {
      this.textFrage8 = textFrage8
    })
    this.fragenService.getFrage9().subscribe(textFrage9 => {
      this.textFrage9 = textFrage9
    })
    this.fragenService.getFrage10().subscribe(textFrage10 => {
      this.textFrage10 = textFrage10
    })
  }

  changeText1() {
    switch (this.selectedTeilgebiet1.key) {
      case 'vertrauen':
        this.fragenService.addFrage1("Vertrauen bezieht sich auf das Maß an Zuversicht, das ein Benutzer in die Fähigkeit eines automatisierten Systems hat, seine Aufgaben zuverlässig und sicher auszuführen.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage1("Kontrollgefühl bezieht sich auf das Gefühl des Benutzers, dass er die Kontrolle über das System hat und bei Bedarf eingreifen kann.")
        break
      case 'sicherheit':
        this.fragenService.addFrage1("Sicherheit bezieht sich auf den Schutz des automatisierten Systems vor unbefugtem Zugriff, Datenverlust und anderen cyberbezogenen Bedrohungen.")
        break
      case 'korrektheit':
        this.fragenService.addFrage1("Korrektheit bezieht sich auf die Genauigkeit und Zuverlässigkeit der vom automatisierten System gelieferten Ergebnisse und Leistungen.")
        break
      case 'transparenz':
        this.fragenService.addFrage1("Transparenz bezieht sich auf die Klarheit und Verständlichkeit der Funktionsweise und Entscheidungsprozesse eines automatisierten Systems.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage1("Vorhersehbarkeit bezieht sich auf die Fähigkeit des Benutzers, die Aktionen und Reaktionen des automatisierten Systems zu antizipieren und zu verstehen.")
        break
      case 'erfahrung':
        this.fragenService.addFrage1("Erfahrung und Bekanntheit beziehen sich auf das Wissen und die Vertrautheit des Benutzers mit dem automatisierten System und dessen Bedienung.")
        break
      case 'zeit':
        this.fragenService.addFrage1("Zeit und Effizienz beziehen sich auf die Fähigkeit des automatisierten Systems, Aufgaben schnell und mit minimalem Aufwand zu erledigen.")
        break
      case 'support':
        this.fragenService.addFrage1("Support und Updates beziehen sich auf die kontinuierliche Unterstützung und Aktualisierung des automatisierten Systems, um seine Leistung und Sicherheit zu gewährleisten.")
        break
      case 'komfort':
        this.fragenService.addFrage1("Komfort bezieht sich auf die Benutzerfreundlichkeit und Bequemlichkeit der Interaktion mit dem automatisierten System.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage1("Verfügbarkeit bezieht sich auf die Zeit, in der das automatisierte System für die Benutzer zugänglich und nutzbar ist.")
        break
    }
    console.log(this.textFrage1)
  }

  changeText2() {
    switch (this.selectedTeilgebiet2.key) {
      case 'vertrauen':
        this.fragenService.addFrage2("Vertrauen ist entscheidend, weil es beeinflusst, wie bereit Benutzer sind, sich auf das System zu verlassen. Ohne ausreichendes Vertrauen könnten Benutzer das System nicht optimal nutzen oder sogar vermeiden.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage2("Ein starkes Kontrollgefühl fördert das Vertrauen und die Akzeptanz des Systems, da Benutzer wissen, dass sie eingreifen können, wenn etwas schiefgeht.")
        break
      case 'sicherheit':
        this.fragenService.addFrage2("Ein sicheres System schützt sensible Daten und gewährleistet die Integrität und Verfügbarkeit der Dienste, was für das Vertrauen der Benutzer unerlässlich ist.")
        break
      case 'korrektheit':
        this.fragenService.addFrage2("Eine hohe Korrektheit ist entscheidend für das Vertrauen und die Zufriedenheit der Benutzer, da sie sich darauf verlassen können, dass das System präzise und fehlerfreie Ergebnisse liefert.")
        break
      case 'transparenz':
        this.fragenService.addFrage2("Transparenz fördert das Vertrauen der Benutzer, da sie die Funktionsweise des Systems verstehen und nachvollziehen können.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage2("Vorhersehbarkeit hilft Benutzern, das Verhalten des Systems besser zu verstehen und angemessen darauf zu reagieren, was das Vertrauen und die Effizienz erhöht.")
        break
      case 'erfahrung':
        this.fragenService.addFrage2("Erfahrung und Bekanntheit fördern das Vertrauen und die Effizienz, da Benutzer sich sicherer und kompetenter fühlen, wenn sie mit dem System interagieren.")
        break
      case 'zeit':
        this.fragenService.addFrage2("Hohe Effizienz spart Zeit und Ressourcen, was die Produktivität und Zufriedenheit der Benutzer erhöht.")
        break
      case 'support':
        this.fragenService.addFrage2("Regelmäßige Updates und effektiver Support sind entscheidend, um die Systemleistung und -sicherheit aufrechtzuerhalten und Probleme schnell zu beheben.")
        break
      case 'komfort':
        this.fragenService.addFrage2("Ein hohes Maß an Komfort fördert die Benutzerzufriedenheit und Akzeptanz des Systems.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage2("Eine hohe Verfügbarkeit ist entscheidend, um sicherzustellen, dass Benutzer jederzeit auf das System zugreifen und es nutzen können.")
        break
    }
  }

  changeText3() {
    switch (this.selectedTeilgebiet3.key) {
      case 'vertrauen':
        this.fragenService.addFrage3("Vertrauen führt zu erhöhter Akzeptanz und Nutzung des Systems, reduziert die Notwendigkeit der Überwachung und Interaktion durch Benutzer und verbessert Arbeitsabläufe und Produktivität.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage3("Ein starkes Kontrollgefühl erhöht das Vertrauen und die Akzeptanz des Systems, verbessert die Benutzerzufriedenheit und die Interaktion zwischen Mensch und Maschine.")
        break
      case 'sicherheit':
        this.fragenService.addFrage3("Sicherheit bietet Schutz vor Datenverlust und Cyberangriffen, erhöht das Vertrauen der Benutzer und sorgt für die Einhaltung gesetzlicher Vorschriften.")
        break
      case 'korrektheit':
        this.fragenService.addFrage3("Korrektheit führt zu erhöhtem Vertrauen und Zuverlässigkeit, verbesserter Entscheidungsfindung sowie einer Reduzierung von Fehlern und Nacharbeiten.")
        break
      case 'transparenz':
        this.fragenService.addFrage3("Transparenz führt zu erhöhtem Vertrauen und Akzeptanz, besserer Nachvollziehbarkeit und Erklärbarkeit von Entscheidungen sowie erleichterter Fehlersuche und -behebung.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage3("Vorhersehbarkeit führt zu erhöhtem Vertrauen und Verständnis, verbesserter Benutzerinteraktion und -effizienz sowie Reduzierung von Fehlern und Missverständnissen.")
        break
      case 'erfahrung':
        this.fragenService.addFrage3("Erfahrung und Bekanntheit führen zu erhöhtem Vertrauen und Effizienz, reduzierter Lernkurve und schnellerer Einarbeitung sowie verbesserter Benutzerzufriedenheit.")
        break
      case 'zeit':
        this.fragenService.addFrage3("Zeit und Effizienz führen zu erhöhter Produktivität, Reduzierung von Kosten und Ressourcen sowie verbesserter Benutzerzufriedenheit.")
        break
      case 'support':
        this.fragenService.addFrage3("Support und Updates führen zu erhöhter Systemsicherheit und -zuverlässigkeit, schneller Problemlösung und Fehlerbehebung sowie verbesserter Benutzerzufriedenheit.")
        break
      case 'komfort':
        this.fragenService.addFrage3("Komfort führt zu erhöhter Benutzerzufriedenheit und -akzeptanz, reduzierter Lernkurve und schnellerer Einarbeitung sowie verbesserter Produktivität und Effizienz.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage3("Verfügbarkeit führt zu erhöhter Benutzerzufriedenheit und -zuverlässigkeit, Minimierung von Ausfallzeiten und Unterbrechungen sowie verbesserter Produktivität und Effizienz.")
        break
    }
  }

  changeText4() {
    switch (this.selectedTeilgebiet4.key) {
      case 'vertrauen':
        this.fragenService.addFrage4("Die richtige Balance an Vertrauen zu finden, es über die Zeit aufzubauen und zu erhalten sowie Transparenz und Nachvollziehbarkeit der Systementscheidungen sicherzustellen, sind die größten Herausforderungen.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage4("Es ist schwierig, die Balance zwischen Automatisierung und menschlicher Kontrolle zu finden, die Benutzer nicht zu überfordern und intuitive Kontrollmechanismen zu entwickeln.")
        break
      case 'sicherheit':
        this.fragenService.addFrage4("Die größte Herausforderung ist die ständig wachsende und sich verändernde Bedrohungslandschaft. Es ist schwierig, die Balance zwischen Sicherheit und Benutzerfreundlichkeit zu finden, und die Kosten und Komplexität der Sicherheitsmaßnahmen können hoch sein.")
        break
      case 'korrektheit':
        this.fragenService.addFrage4("Die Sicherstellung der Datenqualität, die Komplexität der Algorithmen und Modelle sowie die kontinuierliche Überwachung und Validierung der Systemleistung sind die größten Herausforderungen.")
        break
      case 'transparenz':
        this.fragenService.addFrage4("Es ist schwierig, den richtigen Detaillierungsgrad zu finden, die Balance zwischen Transparenz und Komplexität zu wahren und die Informationen für alle Benutzer verständlich darzustellen.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage4("Es ist schwierig, die Komplexität der Systemverhalten zu beherrschen, die Balance zwischen Flexibilität und Konsistenz zu finden sowie kontinuierliche Anpassungen und Verbesserungen vorzunehmen.")
        break
      case 'erfahrung':
        this.fragenService.addFrage4("Es ist schwierig, eine konsistente Benutzererfahrung sicherzustellen, sich an unterschiedliche Benutzerkenntnisse und -fähigkeiten anzupassen sowie kontinuierliche Schulung und Unterstützung bereitzustellen.")
        break
      case 'zeit':
        this.fragenService.addFrage4("Die Balance zwischen Geschwindigkeit und Genauigkeit zu finden, die Überlastung der Benutzer zu vermeiden und eine hohe Systemleistung sicherzustellen, sind die größten Herausforderungen.")
        break
      case 'support':
        this.fragenService.addFrage4("Die Balance zwischen der Frequenz der Updates und der Systemstabilität zu finden, Ausfallzeiten und Unterbrechungen zu vermeiden sowie die Kompatibilität und Integrität sicherzustellen, sind die größten Herausforderungen.")
        break
      case 'komfort':
        this.fragenService.addFrage4("Es ist schwierig, die Balance zwischen Benutzerfreundlichkeit und Funktionalität zu finden, unterschiedliche Benutzerbedürfnisse und -fähigkeiten zu berücksichtigen sowie kontinuierliche Verbesserung und Anpassung sicherzustellen.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage4("Es ist schwierig, die Systemstabilität und -leistung sicherzustellen, Ausfälle zu vermeiden und schnell zu beheben sowie die Balance zwischen Verfügbarkeit und Wartungsanforderungen zu finden.")
        break
    }
  }

  changeText5() {
    switch (this.selectedTeilgebiet5.key) {
      case 'vertrauen':
        this.fragenService.addFrage5("Alle Benutzer, die mit automatisierten Systemen interagieren, sind betroffen, insbesondere solche in sicherheitskritischen Bereichen wie Medizin, Luftfahrt und autonomen Fahrzeugen.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage5("Benutzer in kritischen Umgebungen wie Piloten, Chirurgen und Fahrer von autonomen Fahrzeugen sind besonders betroffen.")
        break
      case 'sicherheit':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in sicherheitskritischen Bereichen wie Finanzdienstleistungen, Gesundheitswesen und kritische Infrastrukturen, sind betroffen.")
        break
      case 'korrektheit':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in Bereichen wie Medizin, Finanzen und wissenschaftlicher Forschung, sind betroffen.")
        break
      case 'transparenz':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in Bereichen wie Recht, Finanzdienstleistungen und Gesundheitswesen, sind betroffen.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in dynamischen und sicherheitskritischen Umgebungen wie Notfallmanagement und Verkehrskontrolle, sind betroffen.")
        break
      case 'erfahrung':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in komplexen und spezialisierten Bereichen wie Technik, Medizin und Wissenschaft, sind betroffen.")
        break
      case 'zeit':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in zeitkritischen und produktionsorientierten Umgebungen wie Fertigung und Logistik, sind betroffen.")
        break
      case 'support':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in stark regulierten oder sicherheitskritischen Branchen wie Gesundheitswesen und Finanzen, sind betroffen.")
        break
      case 'komfort':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in benutzerintensiven Umgebungen wie Büroarbeit und Kundenservice, sind betroffen.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage5("Alle Benutzer, insbesondere solche in zeitkritischen und produktionsorientierten Umgebungen wie Fertigung und Gesundheitswesen, sind betroffen.")
        break
    }
  }

  changeText6() {
    switch (this.selectedTeilgebiet6.key) {
      case 'vertrauen':
        this.fragenService.addFrage6("Zu den wichtigsten Punkten gehören die Zuverlässigkeit und Genauigkeit des Systems, die Transparenz der Funktionsweise und Entscheidungen sowie die Konsistenz in der Leistung.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage6("Wichtige Punkte sind die Einfachheit und Intuitivität der Kontrollmechanismen, die Klarheit der Rückmeldungen und des Systemstatus sowie die Möglichkeiten zur manuellen Übersteuerung.")
        break
      case 'sicherheit':
        this.fragenService.addFrage6("Zu den wichtigsten Punkten gehören die Verschlüsselung von Daten, Authentifizierungs- und Autorisierungsmechanismen sowie regelmäßige Sicherheitsupdates und Überprüfungen.")
        break
      case 'korrektheit':
        this.fragenService.addFrage6("Wichtige Punkte sind die hohe Datenqualität, präzise und gut getestete Algorithmen sowie die kontinuierliche Validierung und Überwachung.")
        break
      case 'transparenz':
        this.fragenService.addFrage6("Wichtige Punkte sind die Bereitstellung verständlicher Erklärungen und Dokumentationen, die Verwendung von Explainable AI (XAI)-Techniken sowie regelmäßige Kommunikation und Feedback an die Benutzer.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage6("Wichtige Punkte sind konsistentes und nachvollziehbares Systemverhalten, klare und verständliche Rückmeldungen sowie regelmäßige Kommunikation und Feedback.")
        break
      case 'erfahrung':
        this.fragenService.addFrage6("Wichtige Punkte sind eine konsistente und intuitive Benutzeroberfläche, regelmäßige Schulungen und Unterstützung sowie Anpassung an die unterschiedlichen Benutzerkenntnisse und -fähigkeiten.")
        break
      case 'zeit':
        this.fragenService.addFrage6("Wichtige Punkte sind hohe Systemleistung und Zuverlässigkeit, Minimierung von Wartezeiten und Verzögerungen sowie Optimierung von Arbeitsabläufen und Prozessen.")
        break
      case 'support':
        this.fragenService.addFrage6("Wichtige Punkte sind regelmäßige und gut geplante Updates, effizienter und zugänglicher Support sowie Sicherstellung der Systemkompatibilität und -integrität.")
        break
      case 'komfort':
        this.fragenService.addFrage6("Wichtige Punkte sind eine intuitive und benutzerfreundliche Benutzeroberfläche, Anpassungsfähigkeit an unterschiedliche Benutzerbedürfnisse sowie kontinuierliche Verbesserung und Feedback.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage6("Wichtige Punkte sind hohe Systemstabilität und -zuverlässigkeit, Minimierung von Ausfallzeiten und Unterbrechungen sowie schnelle Fehlerbehebung und Wiederherstellung.")
        break
    }
  }

  changeText7() {
    switch (this.selectedTeilgebiet7.key) {
      case 'vertrauen':
        this.fragenService.addFrage7("Das Vertrauen kann durch Erhöhung der Systemtransparenz, Sicherstellen einer hohen Zuverlässigkeit und Genauigkeit sowie regelmäßiges Feedback und Updates zur Systemleistung verbessert werden.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage7("Das Kontrollgefühl kann durch Integration intuitiver und leicht zugänglicher Steuerungen, klare und verständliche Rückmeldungen sowie Möglichkeiten zur manuellen Übersteuerung verbessert werden.")
        break
      case 'sicherheit':
        this.fragenService.addFrage7("Die Sicherheit kann durch die Implementierung starker Authentifizierungsverfahren, regelmäßige Sicherheitsüberprüfungen und Updates sowie die Schulung der Benutzer in Sicherheitsfragen verbessert werden.")
        break
      case 'korrektheit':
        this.fragenService.addFrage7("Die Korrektheit kann durch die Verwendung hochwertiger und gut strukturierter Daten, die Durchführung umfassender Tests und Validierungen sowie regelmäßige Überprüfungen und Aktualisierungen der Algorithmen verbessert werden.")
        break
      case 'transparenz':
        this.fragenService.addFrage7("Transparenz kann durch Bereitstellung verständlicher Erklärungen und Dokumentationen, Verwendung von Explainable AI (XAI)-Techniken und regelmäßige Kommunikation und Feedback an die Benutzer verbessert werden.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage7("Vorhersehbarkeit kann durch Implementierung konsistenter und nachvollziehbarer Verhaltensweisen, klare und verständliche Rückmeldungen und Statusanzeigen sowie regelmäßige Überprüfung und Verbesserung des Systemverhaltens verbessert werden.")
        break
      case 'erfahrung':
        this.fragenService.addFrage7("Erfahrung und Bekanntheit können durch Bereitstellung umfassender Schulungen und Handbücher, Implementierung einer konsistenten und intuitiven Benutzeroberfläche sowie kontinuierliche Unterstützung und Feedback verbessert werden.")
        break
      case 'zeit':
        this.fragenService.addFrage7("Zeit und Effizienz können durch Implementierung leistungsstarker Hardware und Software, Optimierung von Arbeitsabläufen und Prozessen sowie regelmäßige Überprüfung und Verbesserung der Systemleistung verbessert werden.")
        break
      case 'support':
        this.fragenService.addFrage7("Support und Updates können durch Implementierung automatisierter Update-Mechanismen, Bereitstellung eines effizienten und zugänglichen Supports sowie regelmäßige Überprüfung und Anpassung des Systems verbessert werden.")
        break
      case 'komfort':
        this.fragenService.addFrage7("Komfort kann durch Implementierung einer intuitiven und benutzerfreundlichen Benutzeroberfläche, regelmäßige Sammlung und Umsetzung von Benutzerfeedback sowie Anpassung an unterschiedliche Benutzerbedürfnisse und -fähigkeiten verbessert werden.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage7("Verfügbarkeit kann durch Implementierung robuster und zuverlässiger Systeme, regelmäßige Wartung und Überprüfung sowie schnelle Fehlerbehebung und Wiederherstellung verbessert werden.")
        break
    }
  }

  changeText8() {
    switch (this.selectedTeilgebiet8.key) {
      case 'vertrauen':
        this.fragenService.addFrage8("Es besteht die Gefahr, andere wichtige Aspekte wie Kontrolle und Sicherheit zu vernachlässigen oder ein übermäßiges Vertrauen in das System zu entwickeln, was zu Sicherheitsrisiken führen kann.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Komplexität des Systems zu erhöhen, die Benutzer zu überfordern und die Vorteile der Automatisierung zu vernachlässigen.")
        break
      case 'sicherheit':
        this.fragenService.addFrage8("Es kann die Benutzerfreundlichkeit beeinträchtigt werden, und es können erhöhte Kosten und Komplexität entstehen. Außerdem könnten andere wichtige Aspekte wie Benutzerkomfort vernachlässigt werden.")
        break
      case 'korrektheit':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Benutzerfreundlichkeit zu vernachlässigen, erhöhten Aufwand für Tests und Validierungen zu verursachen und die Balance zwischen Korrektheit und Systemleistung zu verlieren.")
        break
      case 'transparenz':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Benutzer durch zu viele Informationen zu überfordern, die Geheimhaltung von Geschäftsgeheimnissen zu gefährden und die Balance zwischen Transparenz und Benutzerfreundlichkeit zu verlieren.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Systemflexibilität einzuschränken, die Balance zwischen Vorhersehbarkeit und Anpassungsfähigkeit zu verlieren und andere wichtige Aspekte wie Benutzerkomfort zu vernachlässigen.")
        break
      case 'erfahrung':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Anpassungsfähigkeit des Systems zu vernachlässigen, die Balance zwischen Benutzerfreundlichkeit und Komplexität zu verlieren und erhöhten Aufwand für Schulungen und Unterstützung zu verursachen.")
        break
      case 'zeit':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Genauigkeit und Qualität zu vernachlässigen, die Benutzer zu überlasten und die Balance zwischen Effizienz und Benutzerkomfort zu verlieren.")
        break
      case 'support':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Benutzer mit häufigen Updates zu überfordern, die Systemstabilität durch unzureichend getestete Updates zu beeinträchtigen und andere wichtige Aspekte wie Benutzerfreundlichkeit zu vernachlässigen.")
        break
      case 'komfort':
        this.fragenService.addFrage8("Es besteht die Gefahr, die Systemfunktionalität zu vernachlässigen, erhöhte Kosten und Aufwand für Benutzerfreundlichkeit zu verursachen sowie die Balance zwischen Komfort und Leistung zu verlieren.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage8("Es besteht die Gefahr, andere Aspekte wie Benutzerkomfort und Effizienz zu vernachlässigen, erhöhte Kosten und Aufwand für Wartung und Überwachung zu verursachen sowie die Balance zwischen Verfügbarkeit und Wartungsanforderungen zu verlieren.")
        break
    }
  }

  changeText9() {
    switch (this.selectedTeilgebiet9.key) {
      case 'vertrauen':
        this.fragenService.addFrage9("Zur Verbesserung des Vertrauens können Transparenz-Tools wie Explainable AI (XAI) und Systeme zur Leistungsmessung und Überwachung eingesetzt werden.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage9("Zur Verbesserung des Kontrollgefühls können benutzerfreundliche UI/UX-Design-Tools sowie Systeme zur Rückmeldung und Statusanzeige verwendet werden.")
        break
      case 'sicherheit':
        this.fragenService.addFrage9("Zur Verbesserung der Sicherheit können Antiviren- und Antimalware-Programme, Firewalls und Intrusion Detection Systems (IDS) sowie Verschlüsselungssoftware verwendet werden.")
        break
      case 'korrektheit':
        this.fragenService.addFrage9("Zur Verbesserung der Korrektheit können Datenvalidierungs- und Reinigungswerkzeuge, Test- und Validierungssoftware sowie Algorithmen zur Überwachung und Fehlerkorrektur eingesetzt werden.")
        break
      case 'transparenz':
        this.fragenService.addFrage9("Zur Verbesserung der Transparenz können Tools zur Visualisierung und Erklärung von Entscheidungsprozessen sowie Dokumentations- und Wissensmanagementsysteme verwendet werden.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage9("Zur Verbesserung der Vorhersehbarkeit können Simulationstools zur Vorhersage von Systemverhalten sowie Systeme zur Rückmeldung und Statusanzeige verwendet werden.")
        break
      case 'erfahrung':
        this.fragenService.addFrage9("Zur Verbesserung der Erfahrung und Bekanntheit können Lernmanagementsysteme (LMS) sowie benutzerfreundliche Dokumentations- und Hilfesysteme verwendet werden.")
        break
      case 'zeit':
        this.fragenService.addFrage9("Zur Verbesserung von Zeit und Effizienz können Optimierungs- und Automatisierungstools sowie Performance-Monitoring-Software verwendet werden.")
        break
      case 'support':
        this.fragenService.addFrage9("Zur Verbesserung von Support und Updates können automatisierte Update-Systeme, Ticketing- und Support-Management-Software sowie Monitoring-Tools verwendet werden.")
        break
      case 'komfort':
        this.fragenService.addFrage9("Zur Verbesserung des Komforts können benutzerfreundliche UI/UX-Design-Tools sowie Feedback- und Analyse-Software verwendet werden.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage9("Zur Verbesserung der Verfügbarkeit können Monitoring- und Überwachungssoftware sowie Systeme zur Fehlererkennung und -behebung verwendet werden.")
        break
    }
  }

  changeText10() {
    switch (this.selectedTeilgebiet10.key) {
      case 'vertrauen':
        this.fragenService.addFrage10("Probleme mit Vertrauen können durch mangelnde Transparenz und Erklärbarkeit der Entscheidungen, inkonsistente oder unzuverlässige Leistung sowie fehlende Kommunikation und Feedback an den Benutzer entstehen.")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage10("Probleme mit dem Kontrollgefühl können durch komplexe oder unklare Steuerungen, mangelnde Rückmeldungen und Statusinformationen sowie fehlende Möglichkeiten zur manuellen Übersteuerung entstehen.")
        break
      case 'sicherheit':
        this.fragenService.addFrage10("Probleme mit der Sicherheit können durch veraltete Software und Systeme, mangelnde regelmäßige Sicherheitsupdates sowie fehlende oder schwache Authentifizierungs- und Autorisierungsmechanismen entstehen.")
        break
      case 'korrektheit':
        this.fragenService.addFrage10("Probleme mit der Korrektheit können durch schlechte Datenqualität, unzureichende Tests und Validierungen sowie komplexe oder fehlerhafte Algorithmen entstehen.")
        break
      case 'transparenz':
        this.fragenService.addFrage10("Probleme mit der Transparenz können durch komplexe und schwer verständliche Entscheidungsprozesse, mangelnde klare und zugängliche Erklärungen sowie unzureichende Kommunikation und Feedback an die Benutzer entstehen.")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage10("Probleme mit der Vorhersehbarkeit können durch komplexes und inkonsistentes Systemverhalten, unzureichende Rückmeldungen und Statusanzeigen sowie mangelnde klare und verständliche Informationen entstehen.")
        break
      case 'erfahrung':
        this.fragenService.addFrage10("Probleme mit Erfahrung und Bekanntheit können durch eine komplexe oder schwer verständliche Benutzeroberfläche, unzureichende Schulungen und Unterstützung sowie mangelnde klare und verständliche Dokumentationen entstehen.")
        break
      case 'zeit':
        this.fragenService.addFrage10("Probleme mit Zeit und Effizienz können durch unzureichende Hardware- und Softwareleistung, ineffiziente Arbeitsabläufe und Prozesse sowie mangelnde Optimierung und Anpassung entstehen.")
        break
      case 'support':
        this.fragenService.addFrage10("Probleme mit Support und Updates können durch unzureichende oder schlecht geplante Updates, ineffizienten Support und mangelnde Überwachung und Anpassung entstehen.")
        break
      case 'komfort':
        this.fragenService.addFrage10("Probleme mit Komfort können durch eine komplexe oder unübersichtliche Benutzeroberfläche, mangel an Benutzerfeedback und Anpassung sowie unzureichende Berücksichtigung unterschiedlicher Benutzerbedürfnisse entstehen.")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage10("Probleme mit der Verfügbarkeit können durch unzureichende Systemstabilität und -zuverlässigkeit, mangelnde regelmäßige Wartung und Überprüfung sowie langsame Fehlerbehebung und Wiederherstellung entstehen.")
        break
    }
  }

}
