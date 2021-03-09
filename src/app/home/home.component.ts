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
  increase(num:string) {
    this.checkNum(num);
    this.count += Number(num)||0;
  }
  decrease(num:string) {
    this.checkNum(num);
    this.count -= Number(num)||0;
  }
  checkNum(num:string) {
    let number = Number(num)|| false;
    console.log(number);
    if(number===false && num!=="0") {
      this.messageService.add({severity:'warn', summary: 'Warning', detail: "That isn't a number"});
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
