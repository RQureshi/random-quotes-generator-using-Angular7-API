import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule, Response} from '@angular/http';

import { AppComponent } from './app.component';
import {QuoteService} from '../services/quote.service'
import{QuoteBoxComponent}from '../quote-box/quote-box.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
