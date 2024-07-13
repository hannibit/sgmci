import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  fragebogen() {
    this.router.navigate(['/fragebogen'])
  }

  teilgebiete() {
    this.router.navigate(['/teilgebiete'])
  }

  faq() {
    this.router.navigate(['/faq'])
  }

}
