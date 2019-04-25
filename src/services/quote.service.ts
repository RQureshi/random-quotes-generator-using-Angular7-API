import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Quote } from 'src/models/quote.class';


@Injectable()
export class QuoteService{
    constructor(private http:Http){

    }

    public getRandomQuote():Observable<Quote>{
      // return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .map((resp:Response)=> {
          return resp.json();
      })
       
    }
}