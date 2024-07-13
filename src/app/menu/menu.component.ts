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
        route: '/teilgebiete'
      },
      {
        label: 'FAQ',
        icon: 'pi pi-question-circle',
        route: '/faq'
      }
    ];
  }

}
