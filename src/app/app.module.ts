import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
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
    BrowserModule, FormsModule, ChartsModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
