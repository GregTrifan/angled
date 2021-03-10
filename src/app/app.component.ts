import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig,PrimeIcons } from 'primeng/api';
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
          icon:PrimeIcons.HOME,
          routerLink:"/"
      },
      {
        label:"About",
        icon:PrimeIcons.INFO_CIRCLE,
        routerLink:"/about"
      }
  ];
  }
}
