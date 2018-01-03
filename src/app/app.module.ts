import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MortgageFormComponent } from './mortgage-form/mortgage-form.component';
import { MortgageResultComponent } from './mortgage-result/mortgage-result.component';

import {CalcService} from './services/calc.service';

@NgModule({
  declarations: [
    AppComponent,
    MortgageFormComponent,
    MortgageResultComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
