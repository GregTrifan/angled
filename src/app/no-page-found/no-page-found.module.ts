import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {NoPageFoundComponent} from "./no-page-found.component";

@NgModule({
    declarations:[
        NoPageFoundComponent
    ],
    imports: [
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [NoPageFoundComponent]
})
export class NoPageFoundModule { }; 