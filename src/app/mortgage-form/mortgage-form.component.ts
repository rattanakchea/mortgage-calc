import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.sass']
})
export class MortgageFormComponent implements OnInit {

  mortgage: {
    homeValue: number,
    downPaymentRate: number,
    loanLength: number,
    interestRate: number,
    homeInsurance: number,
    downPaymentAmount?: number
  };

  extras: {
    annualTaxInterest: number,
    annualTax?: number,
    loanAmount?: number
  }

  constructor() {
    // default value
    this.mortgage = {
      homeValue: 300000,
      downPaymentRate: 20,
      loanLength: 30,
      interestRate: 4,
      homeInsurance: 800
    };
    let m = this.mortgage;

    this.extras = {
      annualTaxInterest: 1   //1% of homeValue

    };
   this.initCalc();
  }

  initCalc() {
    this.mortgage.downPaymentAmount = this.mortgage.homeValue * this.mortgage.downPaymentRate / 100;
    this.extras.annualTax = this.mortgage.homeValue * this.extras.annualTaxInterest/100; 
  }

  onHomeValueChange() {
    console.log('home value change');
    // update downpayment
    this.initCalc();
  }

  onDownPaymentAmountChange() {
    this.mortgage.downPaymentRate = this.mortgage.downPaymentAmount / this.mortgage.homeValue * 100;
  }

  onDownPaymentRateChange() {
    this.mortgage.downPaymentAmount = this.mortgage.downPaymentRate/100 * this.mortgage.homeValue;    
  }

  getLoanAmount() {
    //console.log('getloan')
    this.extras.loanAmount = this.mortgage.homeValue - this.mortgage.downPaymentAmount;
    return this.extras.loanAmount;
  }

  ngOnInit() {
  }

}
