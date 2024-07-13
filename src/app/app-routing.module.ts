import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FragebogenComponent} from "./fragebogen/fragebogen.component";
import {TeilgebieteComponent} from "./teilgebiete/teilgebiete.component";
import {VertrauenComponent} from "./vertrauen/vertrauen.component";
import {KontrollgefuehlComponent} from "./kontrollgefuehl/kontrollgefuehl.component";
import {SicherheitComponent} from "./sicherheit/sicherheit.component";
import {KorrektheitComponent} from "./korrektheit/korrektheit.component";
import {TransparenzComponent} from "./transparenz/transparenz.component";
import {VorhersehbarkeitComponent} from "./vorhersehbarkeit/vorhersehbarkeit.component";
import {ErfahrungUndBekanntheitComponent} from "./erfahrung-und-bekanntheit/erfahrung-und-bekanntheit.component";
import {ZeitEffizienzComponent} from "./zeit-effizienz/zeit-effizienz.component";
import {SupportUpdatesComponent} from "./support-updates/support-updates.component";
import {KomfortComponent} from "./komfort/komfort.component";
import {VerfuegbarkeitComponent} from "./verfuegbarkeit/verfuegbarkeit.component";
import {FaqComponent} from "./faq/faq.component";



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'fragebogen', component: FragebogenComponent},
  {path: 'teilgebiete', component: TeilgebieteComponent},
  {path: 'vertrauen', component: VertrauenComponent},
  {path: 'kontrollgefuehl', component: KontrollgefuehlComponent},
  {path: 'sicherheit', component: SicherheitComponent},
  {path: 'korrektheit', component: KorrektheitComponent},
  {path: 'transparenz', component: TransparenzComponent},
  {path: 'vorhersehbarkeit', component: VorhersehbarkeitComponent},
  {path: 'erfahrungundbekanntheit', component: ErfahrungUndBekanntheitComponent},
  {path: 'zeiteffizienz', component: ZeitEffizienzComponent},
  {path: 'supportupdates', component: SupportUpdatesComponent},
  {path: 'komfort', component: KomfortComponent},
  {path: 'verfuegbarkeit', component: VerfuegbarkeitComponent},
  {path: 'faq', component: FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
