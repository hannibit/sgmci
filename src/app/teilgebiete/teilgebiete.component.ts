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
