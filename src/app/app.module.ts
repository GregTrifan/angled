/* Angular Modules */
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";
import {NoPageFoundModule} from "./no-page-found/no-page-found.module";
import { AboutModule } from './about/about.module';
import { InputTextModule } from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from "primeng/panel";


// App Modules
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // App modules
    HomeModule,
    NoPageFoundModule,
    AboutModule,
    // Routing
    AppRoutingModule,
    // Misc modules
    BrowserModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
