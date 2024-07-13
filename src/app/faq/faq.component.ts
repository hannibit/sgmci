import {Component, OnInit} from '@angular/core';

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

  ngOnInit(): void {
    this.teilgebiete = [
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
  }

}
