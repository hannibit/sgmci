import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {
    this.items= [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/home'
      },
      {
        label: 'Fragebogen',
        icon: 'pi pi-search',
        route: '/fragebogen'
      },
      {
        label: 'Teilgebiete',
        icon: 'pi pi-th-large',
        route: '/teilgebiete',
        items: [
          // {
          //   label: 'Vertrauen',
          //   icon: 'pi pi-th-large',
          //   route: '/vertrauen'
          // },
          {
            label: 'Kontrollgefühl',
            icon: 'pi pi-th-large',
            route: '/kontrollgefuehl'
          },
          {
            label: 'Sicherheit',
            icon: 'pi pi-th-large',
            route: '/sicherheit'
          },
          {
            label: 'Korrektheit',
            icon: 'pi pi-th-large',
            route: '/korrektheit'
          },
          {
            label: 'Transparenz',
            icon: 'pi pi-th-large',
            route: '/transparenz'
          },
          {
            label: 'Vorhersehbarkeit',
            icon: 'pi pi-th-large',
            route: '/vorhersehbarkeit'
          },
          {
            label: 'Erfahrung und Bekanntheit',
            icon: 'pi pi-th-large',
            route: '/erfahrungundbekanntheit'
          },
          {
            label: 'Zeit/Effizienz',
            icon: 'pi pi-th-large',
            route: '/zeiteffizienz'
          },
          {
            label: 'Support/Updates',
            icon: 'pi pi-th-large',
            route: '/supportupdates'
          },
          {
            label: 'Komfort',
            icon: 'pi pi-th-large',
            route: '/komfort'
          },
          {
            label: 'Verfügbarkeit',
            icon: 'pi pi-th-large',
            route: '/verfuegbarkeit'
          },
        ]
      },
      {
        label: 'FAQ',
        icon: 'pi pi-question-circle',
        route: '/faq'
      }
    ];
  }

}
