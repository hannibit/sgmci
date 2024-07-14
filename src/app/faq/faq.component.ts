import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

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

  textFrage1: string | undefined;
  textFrage2: string | undefined;
  textFrage3: string | undefined;
  textFrage4: string | undefined;
  textFrage5: string | undefined;
  textFrage6: string | undefined;
  textFrage7: string | undefined;
  textFrage8: string | undefined;
  textFrage9: string | undefined;
  textFrage10: string | undefined;

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
    this.textFrage1 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage2 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage3 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage4 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage5 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage6 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage7 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage8 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage9 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
    this.textFrage10 = "Wählen Sie ein Teilgebiet aus, um die zugehörige Antwort zu sehen."
  }

  changeText1() {
    switch (this.selectedTeilgebiet1) {
      case 'vertrauen':
        this.textFrage1 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage1 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage1 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage1 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage1 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage1 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage1 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage1 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage1 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage1 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage1 = "Verfügbarkeit"
        break
    }
  }

  changeText2() {
    switch (this.selectedTeilgebiet2) {
      case 'vertrauen':
        this.textFrage2 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage2 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage2 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage2 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage2 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage2 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage2 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage2 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage2 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage2 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage2 = "Verfügbarkeit"
        break
    }
  }

  changeText3() {
    switch (this.selectedTeilgebiet3) {
      case 'vertrauen':
        this.textFrage3 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage3 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage3 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage3 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage3 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage3 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage3 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage3 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage3 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage3 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage3 = "Verfügbarkeit"
        break
    }
  }

  changeText4() {
    switch (this.selectedTeilgebiet4) {
      case 'vertrauen':
        this.textFrage4 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage4 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage4 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage4 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage4 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage4 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage4 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage4 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage4 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage4 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage4 = "Verfügbarkeit"
        break
    }
  }

  changeText5() {
    switch (this.selectedTeilgebiet5) {
      case 'vertrauen':
        this.textFrage5 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage5 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage5 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage5 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage5 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage5 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage5 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage5 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage5 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage5 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage5 = "Verfügbarkeit"
        break
    }
  }

  changeText6() {
    switch (this.selectedTeilgebiet6) {
      case 'vertrauen':
        this.textFrage6 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage6 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage6 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage6 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage6 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage6 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage6 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage6 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage6 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage6 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage6 = "Verfügbarkeit"
        break
    }
  }

  changeText7() {
    switch (this.selectedTeilgebiet7) {
      case 'vertrauen':
        this.textFrage7 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage7 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage7 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage7 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage7 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage7 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage7 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage7 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage7 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage7 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage7 = "Verfügbarkeit"
        break
    }
  }

  changeText8() {
    switch (this.selectedTeilgebiet8) {
      case 'vertrauen':
        this.textFrage8 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage8 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage8 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage8 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage8 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage8 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage8 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage8 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage8 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage8 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage8 = "Verfügbarkeit"
        break
    }
  }

  changeText9() {
    switch (this.selectedTeilgebiet9) {
      case 'vertrauen':
        this.textFrage9 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage9 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage9 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage9 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage9 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage9 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage9 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage9 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage9 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage9 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage9 = "Verfügbarkeit"
        break
    }
  }

  changeText10() {
    switch (this.selectedTeilgebiet10) {
      case 'vertrauen':
        this.textFrage10 = "Vertrauen"
        break
      case 'kontrollgefuehl':
        this.textFrage10 = "Kontrollgefühl"
        break
      case 'sicherheit':
        this.textFrage10 = "Sicherheit"
        break
      case 'korrektheit':
        this.textFrage10 = "Korrektheit"
        break
      case 'transparenz':
        this.textFrage10 = "Transparenz"
        break
      case 'vorhersehbarkeit':
        this.textFrage10 = "Vorhersehbarkeit"
        break
      case 'erfahrung':
        this.textFrage10 = "Erfahrung und Bekanntheit"
        break
      case 'zeit':
        this.textFrage10 = "Zeit/Effizienz"
        break
      case 'support':
        this.textFrage10 = "Support/Updates"
        break
      case 'komfort':
        this.textFrage10 = "Komfort"
        break
      case 'verfuegbarkeit':
        this.textFrage10 = "Verfügbarkeit"
        break
    }
  }


}
