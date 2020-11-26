import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from './Model/currency';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
Link='http://apilayer.net/api/live?access_key=920fc2954da8932553d3f2aee14743ec';
  constructor(private http:HttpClient) { }
  getCurrency(){
   return this.http.get<Currency>(this.Link); 
  }
 
  
}
