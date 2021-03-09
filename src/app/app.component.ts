import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'angled';
  items: MenuItem[];
  ngOnInit() {
    this.primengConfig.ripple = true
    this.items = [
      {
          label:'Home',
          icon:'pi pi-home',
          routerLink:"/"
      },
      {
        label:"About",
        icon:"pi pi-info",
        routerLink:"/about"
      }
  ];
  }
}
