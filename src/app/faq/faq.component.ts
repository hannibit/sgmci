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

  textFrage1: string[] | undefined;
  textFrage2: string[] | undefined;
  textFrage3: string[] | undefined;
  textFrage4: string[] | undefined;
  textFrage5: string[] | undefined;
  textFrage6: string[] | undefined;
  textFrage7: string[] | undefined;
  textFrage8: string[] | undefined;
  textFrage9: string[] | undefined;
  textFrage10: string[] | undefined;

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
      console.log(textFrage1)
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
        this.fragenService.addFrage1("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage1("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage1("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage1("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage1("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage1("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage1("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage1("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage1("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage1("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage1("Verfügbarkeit")
        break
    }
    console.log(this.textFrage1)
  }

  changeText2() {
    switch (this.selectedTeilgebiet2.key) {
      case 'vertrauen':
        this.fragenService.addFrage2("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage2("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage2("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage2("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage2("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage2("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage2("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage2("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage2("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage2("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage2("Verfügbarkeit")
        break
    }
  }

  changeText3() {
    switch (this.selectedTeilgebiet3.key) {
      case 'vertrauen':
        this.fragenService.addFrage3("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage3("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage3("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage3("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage3("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage3("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage3("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage3("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage3("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage3("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage3("Verfügbarkeit")
        break
    }
  }

  changeText4() {
    switch (this.selectedTeilgebiet4.key) {
      case 'vertrauen':
        this.fragenService.addFrage4("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage4("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage4("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage4("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage4("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage4("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage4("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage4("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage4("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage4("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage4("Verfügbarkeit")
        break
    }
  }

  changeText5() {
    switch (this.selectedTeilgebiet5.key) {
      case 'vertrauen':
        this.fragenService.addFrage5("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage5("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage5("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage5("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage5("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage5("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage5("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage5("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage5("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage5("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage5("Verfügbarkeit")
        break
    }
  }

  changeText6() {
    switch (this.selectedTeilgebiet6.key) {
      case 'vertrauen':
        this.fragenService.addFrage6("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage6("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage6("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage6("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage6("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage6("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage6("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage6("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage6("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage6("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage6("Verfügbarkeit")
        break
    }
  }

  changeText7() {
    switch (this.selectedTeilgebiet7.key) {
      case 'vertrauen':
        this.fragenService.addFrage7("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage7("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage7("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage7("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage7("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage7("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage7("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage7("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage7("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage7("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage7("Verfügbarkeit")
        break
    }
  }

  changeText8() {
    switch (this.selectedTeilgebiet8.key) {
      case 'vertrauen':
        this.fragenService.addFrage8("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage8("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage8("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage8("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage8("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage8("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage8("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage8("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage8("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage8("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage8("Verfügbarkeit")
        break
    }
  }

  changeText9() {
    switch (this.selectedTeilgebiet9.key) {
      case 'vertrauen':
        this.fragenService.addFrage9("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage9("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage9("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage9("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage9("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage9("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage9("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage9("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage9("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage9("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage9("Verfügbarkeit")
        break
    }
  }

  changeText10() {
    switch (this.selectedTeilgebiet10.key) {
      case 'vertrauen':
        this.fragenService.addFrage10("Vertrauen")
        break
      case 'kontrollgefuehl':
        this.fragenService.addFrage10("Kontrollgefühl")
        break
      case 'sicherheit':
        this.fragenService.addFrage10("Sicherheit")
        break
      case 'korrektheit':
        this.fragenService.addFrage10("Korrektheit")
        break
      case 'transparenz':
        this.fragenService.addFrage10("Transparenz")
        break
      case 'vorhersehbarkeit':
        this.fragenService.addFrage10("Vorhersehbarkeit")
        break
      case 'erfahrung':
        this.fragenService.addFrage10("Erfahrung und Bekanntheit")
        break
      case 'zeit':
        this.fragenService.addFrage10("Zeit/Effizienz")
        break
      case 'support':
        this.fragenService.addFrage10("Support/Updates")
        break
      case 'komfort':
        this.fragenService.addFrage10("Komfort")
        break
      case 'verfuegbarkeit':
        this.fragenService.addFrage10("Verfügbarkeit")
        break
    }
  }

}
