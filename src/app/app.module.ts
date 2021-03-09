/* Here you'll find most of the spaghetti */

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";
import { AboutComponent } from './about/about.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPageFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
    ToastModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
