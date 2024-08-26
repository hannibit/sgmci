import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fragebogen',
  templateUrl: './fragebogen.component.html',
  styleUrl: './fragebogen.component.css'
})
export class FragebogenComponent implements OnInit{
  visible: boolean = false;

  tooltip1: string = 'Transparenz ist ein entscheidender Faktor für das Vertrauen der Benutzer in ein automatisiertes System. Wenn der Projektfokus stark auf Transparenz liegt, kann dies bedeuten, dass das System so gestaltet ist, dass Benutzer verstehen, wie es funktioniert, was wiederum Vertrauen schafft.'
  tooltip2: string = 'Vorhersehbarkeit ermöglicht es den Benutzern, die Ergebnisse und Reaktionen des Systems zu antizipieren, was die Kontrolle über das System erhöht und das Vertrauen stärkt. Wenn dieses Element im Fokus des Projekts steht, könnte es ein Schlüsselaspekt für das Vertrauen sein.'
  tooltip3: string = 'Sicherheit ist für das Vertrauen in automatisierte Softwaresysteme essenziell, besonders wenn persönliche oder sensitive Daten verarbeitet werden. Ein hoher Fokus auf Sicherheit zeigt, dass das System Schutz vor unbefugtem Zugriff und Datenverlust bietet, was das Vertrauen erhöht.'
  tooltip4: string = 'Die User-Perspektive ist wichtig, um sicherzustellen, dass das System den Bedürfnissen und Erwartungen der Benutzer gerecht wird. Wenn der Fokus stark auf der Benutzerperspektive lag, könnte dies darauf hindeuten, dass das System benutzerfreundlich und vertrauenswürdig ist.'
  tooltip5: string = 'Die Korrektheit der Systemergebnisse ist zentral für das Vertrauen in die Zuverlässigkeit des Systems. Ein hoher Fokus auf korrekte Ergebnisse deutet darauf hin, dass das System zuverlässig ist, was das Vertrauen der Benutzer fördert.'
  tooltip6: string = 'Wenn Benutzer nachvollziehen können, wie und warum das System zu bestimmten Entscheidungen gelangt, erhöht dies das Vertrauen, da es Transparenz und Erklärbarkeit bietet.'
  tooltip7: string = 'Datenschutz ist ein wesentlicher Faktor für das Vertrauen, insbesondere in Zeiten zunehmender Cyber-Bedrohungen. Wenn Benutzer sicher sein können, dass ihre Daten geschützt sind, steigt ihr Vertrauen in das System.'
  tooltip8: string = 'Die Möglichkeit, ein automatisiertes System zu unterbrechen, gibt den Benutzern ein Gefühl der Kontrolle, was wiederum das Vertrauen in das System stärkt.'
  tooltip9: string = 'Benutzerfreundlichkeit und Effizienz der Interaktion sind wichtige Faktoren für das Vertrauen. Wenn Benutzer wichtige Aktionen mit minimalem Aufwand durchführen können, steigt das Vertrauen in die Effizienz und Nutzbarkeit des Systems.'
  tooltip10: string = 'Regelmäßige Updates signalisieren, dass das System kontinuierlich gewartet und verbessert wird, was das Vertrauen in seine Langlebigkeit und Aktualität erhöht.'
  tooltip11: string = 'Wenn Benutzer unmittelbare Rückmeldungen auf ihre Aktionen erhalten, stärkt dies das Vertrauen, da es zeigt, dass das System reaktionsschnell und verlässlich ist.'
  tooltip12: string = 'Vertrautheit mit dem System reduziert Unsicherheit und fördert Vertrauen, da Benutzer bereits positive Erfahrungen gesammelt haben könnten.'
  tooltip13: string = 'Wenn Benutzer sicher sein können, dass die Ergebnisse des Systems korrekt sind, stärkt dies das Vertrauen in die Zuverlässigkeit und Genauigkeit des Systems.'
  tooltip14: string = 'Verfügbarkeit ist entscheidend für das Vertrauen, da Benutzer sich darauf verlassen können müssen, dass das System jederzeit zugänglich ist, wenn sie es benötigen.'
  tooltip15: string = 'Vorhersehbarkeit reduziert Unsicherheit und gibt Benutzern ein Gefühl der Kontrolle, was das Vertrauen in die Handlungen des Systems verstärkt.'

  categoriesFokus: any[] | undefined;
  categoriesInteraction: any[] | undefined;
  selectedCategory1: any;
  selectedCategory2: any;
  selectedCategory3: any;
  selectedCategory4: any;
  selectedCategory5: any;
  selectedCategory6: any;
  selectedCategory7: any;
  selectedCategory8: any;
  selectedCategory9: any;
  selectedCategory10: any;
  selectedCategory11: any;
  selectedCategory12: any;
  selectedCategory13: any;
  selectedCategory14: any;
  selectedCategory15: any;

  teilgebiete: any[] | undefined;
  ausgewaehlteTeilgebiete: any[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categoriesFokus = [
      { name: 'kein Fokus', key: 'keinFokus'},
      { name: 'wenig Fokus', key: 'wenigFokus'},
      { name: 'weder noch', key: 'wederNoch'},
      { name: 'mittlerer Fokus', key: 'mittlererFokus'},
      { name: 'hoher Fokus', key: 'hoherFokus'},
    ]
    this.selectedCategory1 = this.categoriesFokus[0];
    this.selectedCategory2 = this.categoriesFokus[0];
    this.selectedCategory3 = this.categoriesFokus[0];
    this.selectedCategory4 = this.categoriesFokus[0];
    this.selectedCategory5 = this.categoriesFokus[0];

    this.categoriesInteraction = [
      { name: 'Nein', key: 'nein'},
      { name: 'Selten', key: 'selten'},
      { name: 'Teilweise', key: 'teilweise'},
      { name: 'Größtenteils', key: 'groestenteils'},
      { name: 'Ja', key: 'ja'},
    ]
    this.selectedCategory6 = this.categoriesInteraction[0];
    this.selectedCategory7 = this.categoriesInteraction[0];
    this.selectedCategory8 = this.categoriesInteraction[0];
    this.selectedCategory9 = this.categoriesInteraction[0];
    this.selectedCategory10 = this.categoriesInteraction[0];
    this.selectedCategory11 = this.categoriesInteraction[0];
    this.selectedCategory12 = this.categoriesInteraction[0];
    this.selectedCategory13 = this.categoriesInteraction[0];
    this.selectedCategory14 = this.categoriesInteraction[0];
    this.selectedCategory15 = this.categoriesInteraction[0];

    this.teilgebiete = [
      {
        name: 'Vertrauen',
        beschreibung: 'Bereitschaft, sich auf eine Person oder eine Sache zu verlassen',
      },
      {
        name: 'Kontrollgefühl',
        beschreibung: 'Gefühl, die Kontrolle über eine Situation zu haben',
      },
      {
        name: 'Sicherheit',
        beschreibung: 'Schutz vor Gefahren und Risiken',
      },
      {
        name: 'Korrektheit',
        beschreibung: 'Richtigkeit, Genauigkeit und Fehlerfreiheit',
      },
      {
        name: 'Transparenz',
        beschreibung: 'Offenlegung von Informationen und Prozessen',
      },
      {
        name: 'Vorhersehbarkeit',
        beschreibung: 'Möglichkeit, zukünftige Ereignisse vorherzusagen',
      },
      {
        name: 'Erfahrung und Bekanntheit',
        beschreibung: 'Wissen und Kenntnisse über eine Sache oder Person',
      },
      {
        name: 'Zeit/Effizienz',
        beschreibung: 'Zeitersparnis und schnelle Erledigung von Aufgaben',
      },
      {
        name: 'Support/Updates',
        beschreibung: 'Unterstützung und Aktualisierungen',
      },
      {
        name: 'Komfort',
        beschreibung: 'Komfortable und einfache Bedienung',
      },
      {
        name: 'Verfügbarkeit',
        beschreibung: 'Verfügbarkeit von Informationen und Dienstleistungen',
      },
    ]
  }

  calculate() {
    //part 1
    let fokus = 0;
    switch (this.selectedCategory1.key) {
      case 'keinFokus':
        fokus += 1;
        break;
      case 'wenigFokus':
        fokus += 2;
        break;
      case 'wederNoch':
        fokus += 3;
        break;
      case 'mittlererFokus':
        fokus += 4;
        break;
      case 'hoherFokus':
        fokus += 5;
        break;
    }
    switch (this.selectedCategory2.key) {
      case 'keinFokus':
        fokus += 1;
        break;
      case 'wenigFokus':
        fokus += 2;
        break;
      case 'wederNoch':
        fokus += 3;
        break;
      case 'mittlererFokus':
        fokus += 4;
        break;
      case 'hoherFokus':
        fokus += 5;
        break;
    }
    switch (this.selectedCategory3.key) {
      case 'keinFokus':
        fokus += 1;
        break;
      case 'wenigFokus':
        fokus += 2;
        break;
      case 'wederNoch':
        fokus += 3;
        break;
      case 'mittlererFokus':
        fokus += 4;
        break;
      case 'hoherFokus':
        fokus += 5;
        break;
    }
    switch (this.selectedCategory4.key) {
      case 'keinFokus':
        fokus += 1;
        break;
      case 'wenigFokus':
        fokus += 2;
        break;
      case 'wederNoch':
        fokus += 3;
        break;
      case 'mittlererFokus':
        fokus += 4;
        break;
      case 'hoherFokus':
        fokus += 5;
        break;
    }
    switch (this.selectedCategory5.key) {
      case 'keinFokus':
        fokus += 1;
        break;
      case 'wenigFokus':
        fokus += 2;
        break;
      case 'wederNoch':
        fokus += 3;
        break;
      case 'mittlererFokus':
        fokus += 4;
        break;
      case 'hoherFokus':
        fokus += 5;
        break;
    }

    //part 2
    let interaction = 0;
    switch (this.selectedCategory6.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory7.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory8.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory9.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory10.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory11.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory12.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory13.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory14.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }
    switch (this.selectedCategory15.key) {
      case 'nein':
        interaction += 1;
        break;
      case 'selten':
        interaction += 2;
        break;
      case 'teilweise':
        interaction += 3;
        break;
      case 'groestenteils':
        interaction += 4;
        break;
      case 'ja':
        interaction += 5;
        break;
    }

    let result = fokus + interaction;
    if (result <= 20) {
      this.ausgewaehlteTeilgebiete = [
        {
          name: 'Erfahrung und Bekanntheit',
          beschreibung: 'Wissen und Kenntnisse über eine Sache oder Person',
        },
        {
          name: 'Zeit/Effizienz',
          beschreibung: 'Zeitersparnis und schnelle Erledigung von Aufgaben',
        },
        {
          name: 'Support/Updates',
          beschreibung: 'Unterstützung und Aktualisierungen',
        },
      ]
    }
    if (result >20 && result <= 40) {
      this.ausgewaehlteTeilgebiete = [
        {
          name: 'Korrektheit',
          beschreibung: 'Richtigkeit, Genauigkeit und Fehlerfreiheit',
        },
        {
          name: 'Transparenz',
          beschreibung: 'Offenlegung von Informationen und Prozessen',
        },
        {
          name: 'Vorhersehbarkeit',
          beschreibung: 'Möglichkeit, zukünftige Ereignisse vorherzusagen',
        },
      ]
    }
    if (result > 40 && result <= 65) {
      this.ausgewaehlteTeilgebiete = [
        {
          name: 'Vertrauen',
          beschreibung: 'Bereitschaft, sich auf eine Person oder eine Sache zu verlassen',
        },
        {
          name: 'Kontrollgefühl',
          beschreibung: 'Gefühl, die Kontrolle über eine Situation zu haben',
        },
        {
          name: 'Sicherheit',
          beschreibung: 'Schutz vor Gefahren und Risiken',
        }
      ]
    }

    this.showDialog()
  }

  showDialog() {
    this.visible = true;
  }

  navigate(url: string) {
    switch (url) {
      case 'Vertrauen':
        this.router.navigate(['/vertrauen']);
        return
      case 'Kontrolgefühl':
        this.router.navigate(['/kontrolgefuehl']);
        return
      case 'Sicherheit':
        this.router.navigate(['/sicherheit']);
        return
      case 'Korrektheit':
        this.router.navigate(['/korrektheit']);
        return
      case 'Transparenz':
        this.router.navigate(['/transparenz']);
        return
      case 'Vorhersehbarkeit':
        this.router.navigate(['/vorhersehbarkeit']);
        return
      case 'Erfahrung und Bekanntheit':
        this.router.navigate(['/erfahrungundbekanntheit']);
        return
      case 'Zeit/Effizienz':
        this.router.navigate(['/zeiteffizienz']);
        return
      case 'Support/Updates':
        this.router.navigate(['/supportupdates']);
        return
      case 'Komfort':
        this.router.navigate(['/komfort']);
        return
      case 'Verfügbarkeit':
        this.router.navigate(['/verfuegbarkeit']);
        return
    }
  }

}
