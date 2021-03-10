import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import {HomeComponent} from "./home.component";
import { ButtonModule } from 'primeng/button';
import { ToastModule } from "primeng/toast";
import {InputNumberModule} from "primeng/inputnumber";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations:[
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ButtonModule,
        ToastModule,
        InputNumberModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }; 