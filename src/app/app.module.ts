import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { FragebogenComponent } from './fragebogen/fragebogen.component';
import { MenuComponent } from './menu/menu.component';
import { ErfahrungUndBekanntheitComponent } from './erfahrung-und-bekanntheit/erfahrung-und-bekanntheit.component';
import { KomfortComponent } from './komfort/komfort.component';
import { KontrollgefuehlComponent } from './kontrollgefuehl/kontrollgefuehl.component';
import { KorrektheitComponent } from './korrektheit/korrektheit.component';
import { SicherheitComponent } from './sicherheit/sicherheit.component';
import { SupportUpdatesComponent } from './support-updates/support-updates.component';
import { TransparenzComponent } from './transparenz/transparenz.component';
import { VerfuegbarkeitComponent } from './verfuegbarkeit/verfuegbarkeit.component';
import { VertrauenComponent } from './vertrauen/vertrauen.component';
import { VorhersehbarkeitComponent } from './vorhersehbarkeit/vorhersehbarkeit.component';
import { ZeitEffizienzComponent } from './zeit-effizienz/zeit-effizienz.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FaqComponent,
    FragebogenComponent,
    MenuComponent,
    ErfahrungUndBekanntheitComponent,
    KomfortComponent,
    KontrollgefuehlComponent,
    KorrektheitComponent,
    SicherheitComponent,
    SupportUpdatesComponent,
    TransparenzComponent,
    VerfuegbarkeitComponent,
    VertrauenComponent,
    VorhersehbarkeitComponent,
    ZeitEffizienzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
