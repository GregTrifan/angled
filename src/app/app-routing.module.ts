import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";

const routes: Routes = [
    {path: 'home', redirectTo: '/', pathMatch: 'full'},
    {path: '',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: '**', component: NoPageFoundComponent}
];
@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { } 