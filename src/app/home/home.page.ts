import { SelectorListContext } from '@angular/compiler';
import { Component } from '@angular/core';
import { ExchangeService } from '../exchange.service';
import { Currency } from '../Model/currency';
import {Platform} from '@ionic/angular'
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
reponse:Currency;
name:string;
fullName:string;
value:string;
selectedVal:string="USDTND";
data:any[];

str:string;

ev:string[];

  constructor(private exchangeServ: ExchangeService, private platform :Platform) {
this.platform.ready().then(()=>{
  this.data=[
  { name:"USDEUR", value:"EUR", fullName:"Euro"},
  { name:"USDGBP", value:"GBP", fullName:"Livre Sterling"},
  { name:"USDJPY", value:"JPY", fullName:"Yen Japonais"},
  { name:"USDCNY", value:"CNY", fullName:"Yuan Chinois"},
  { name:"USDTND", value:"TND", fullName:"Dinar Tunisien"},
  { name:"USDEGP", value:"EGP", fullName:"Livre Egyptien"}
];
})
  }
  
 onChange(event){ 

    console.log (event.target.value);
    this.ev=event.target.value;
  
    return (this.ev)

   }

getExchange(e){
  console.log(e);
  this.data.forEach(element => {
    if(element.name==e){
      this.value=element.value;
      this.fullName=element.fullName;
    }
  });
  return this.exchangeServ.getCurrency().subscribe(
    (reponse)=> { 
     switch (e){
      case 'USDEUR' : this.str=`Today , 1 Dollar American worth  ${reponse.quotes.USDEUR}   ${this.fullName}`;
      break;
      case 'USDGBP' :this.str=`Today , 1 Dollar American worth   ${reponse.quotes.USDGBP}    ${this.fullName}`;
      break;
      case 'USDJPY' :this.str=`Today , 1 Dollar American worth   ${reponse.quotes.USDJPY }   ${this.fullName}`;
      break;
      case 'USDCNY' :this.str=`Today , 1 Dollar American worth   ${reponse.quotes.USDCNY}   ${this.fullName}`;
      break;
      case 'USDTND' :this.str=`Today , 1 Dollar American worth   ${reponse.quotes.USDTND}    ${this.fullName}`;
      break;
      case 'USDEGP' :this.str=`Today , 1 Dollar American worth   ${reponse.quotes.USDEGP}    ${this.fullName}`;
      break;

     } 
 

  }
  )
}
}
