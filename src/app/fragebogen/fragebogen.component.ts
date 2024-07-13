import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fragebogen',
  templateUrl: './fragebogen.component.html',
  styleUrl: './fragebogen.component.css'
})
export class FragebogenComponent implements OnInit{
  visible: boolean = false;

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
