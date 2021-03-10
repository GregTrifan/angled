import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {MessageService} from 'primeng/api';

interface Pricing {
  bitcoin: {
    usd:number
  }
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [MessageService]
})

export class HomeComponent implements OnInit {
  title = "Angled";
  count = 0;
  increase() {
    this.checkNum();
    this.count += Number(this.num)||0;
  }
  num:number = 2;
  decrease() {
    this.checkNum();
    this.count -= Number(this.num)||0;
  }
  checkNum() {
    if(!this.num) {
      this.messageService.add({severity:'warn', summary: 'Warning', detail: "Please enter a number"});
    }
  }
  constructor(private HttpClient: HttpClient,private messageService: MessageService) {}
  public sendReq() {
    return this.HttpClient.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
  }
  price={
    bitcoin: {
      usd:NaN
    }
  };
  ngOnInit() {
    this.sendReq().subscribe((data: Pricing) => {
      this.price = data;
    });
  }
}
