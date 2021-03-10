import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {AboutComponent} from "./about.component";
import { ButtonModule } from 'primeng/button';
import { ToastModule } from "primeng/toast";
import {CardModule} from 'primeng/card';

@NgModule({
    declarations:[
        AboutComponent
    ],
    imports: [
        HttpClientModule,
        ButtonModule,
        ToastModule,
        CardModule,
    ],
    providers: [],
    bootstrap: [AboutComponent]
})
export class AboutModule { }; 