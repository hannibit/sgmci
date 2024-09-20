import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-teilgebiete',
  templateUrl: './teilgebiete.component.html',
  styleUrl: './teilgebiete.component.css'
})
export class TeilgebieteComponent implements OnInit{
  teilgebiete: any[] | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.teilgebiete = [
      // {
      //   name: 'Vertrauen',
      //   beschreibung: 'Bereitschaft, sich auf eine Person oder eine Sache zu verlassen',
      // },
      {
        name: 'Kontrollgefühl',
        beschreibung: 'Gefühl, die Kontrolle über eine Situation zu haben',
        bild: 'http://localhost:4200/assets/kontrollgefuehl.png'
      },
      {
        name: 'Sicherheit',
        beschreibung: 'Schutz vor Gefahren und Risiken',
        bild: 'http://localhost:4200/assets/sicherheit.png'
      },
      {
        name: 'Korrektheit',
        beschreibung: 'Richtigkeit, Genauigkeit und Fehlerfreiheit',
        bild: 'http://localhost:4200/assets/korrektheit.png'
      },
      {
        name: 'Transparenz',
        beschreibung: 'Offenlegung von Informationen und Prozessen',
        bild: 'http://localhost:4200/assets/transparenz.png'
      },
      {
        name: 'Vorhersehbarkeit',
        beschreibung: 'Möglichkeit, zukünftige Ereignisse vorherzusagen',
        bild: 'http://localhost:4200/assets/vorhersehbarkeit.png'
      },
      {
        name: 'Erfahrung und Bekanntheit',
        beschreibung: 'Wissen und Kenntnisse über eine Sache oder Person',
        bild: 'http://localhost:4200/assets/erfahrung-bekanntheit.png'
      },
      {
        name: 'Zeit/Effizienz',
        beschreibung: 'Zeitersparnis und schnelle Erledigung von Aufgaben',
        bild: 'http://localhost:4200/assets/zeit-effizienz.png'
      },
      {
        name: 'Support/Updates',
        beschreibung: 'Unterstützung und Aktualisierungen',
        bild: 'http://localhost:4200/assets/support-updates.png'
      },
      {
        name: 'Komfort',
        beschreibung: 'Komfortable und einfache Bedienung',
        bild: 'http://localhost:4200/assets/komfort.png'
      },
      {
        name: 'Verfügbarkeit',
        beschreibung: 'Verfügbarkeit von Informationen und Dienstleistungen',
        bild: 'http://localhost:4200/assets/verfuegbarkeit.png'
      },
    ]
  }

  navigate(url: string) {
    switch (url) {
      // case 'Vertrauen':
      //   this.router.navigate(['/vertrauen']);
      //   return
      case 'Kontrollgefühl':
        this.router.navigate(['/kontrollgefuehl']);
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
