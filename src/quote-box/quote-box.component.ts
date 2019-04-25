import {Component, OnInit} from '@angular/core'
import {QuoteService} from '../services/quote.service'
import { from } from 'rxjs';
import { Quote } from '../models/quote.class';

@Component({
    selector:'quote-box',
    templateUrl:'./quote-box.component.html',
    styleUrls:['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit{
  
    public quote:Quote;
   // test:string
    constructor (public quoteService:QuoteService)
    {
        this.getQuote();
    }
    ngOnInit(): void {
        
    }

    
    public getQuote(){
        this.quoteService.getRandomQuote()
        //.subscribe((data)=>this.quote=data)
        .subscribe((data)=>{
                   // this.quote=data
                    this.quote=new Quote(data[0]["quote"],data[0]["character"],data[0]["image"])
                   console.log(this.quote)
                 })
        
    }
}