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
import { TeilgebieteComponent } from './teilgebiete/teilgebiete.component';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {FieldsetModule} from "primeng/fieldset";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {TabViewModule} from "primeng/tabview";
import {AccordionModule} from "primeng/accordion";
import {StepperModule} from "primeng/stepper";
import {ScrollPanelModule} from "primeng/scrollpanel";

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
    ZeitEffizienzComponent,
    TeilgebieteComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        CardModule,
        Button,
        MenubarModule,
        FieldsetModule,
        RadioButtonModule,
        FormsModule,
        DividerModule,
        DialogModule,
        PanelModule,
        DropdownModule,
        TabViewModule,
        AccordionModule,
        StepperModule,
        ScrollPanelModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
