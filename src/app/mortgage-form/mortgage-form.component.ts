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

  optionals: {
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

    this.optionals = {
      annualTaxInterest: .01   //1% of homeValue

    };
   this.initCalc();
  }

  initCalc() {
    this.mortgage.downPaymentAmount = this.mortgage.homeValue * this.mortgage.downPaymentRate / 100;

    this.optionals.annualTax = this.mortgage.homeValue * this.optionals.annualTaxInterest; 
  }

  getLoanAmount() {
    //console.log('getloan')
    this.optionals.loanAmount = this.mortgage.homeValue - this.mortgage.downPaymentAmount;
    return this.optionals.loanAmount;
  }

  ngOnInit() {
  }

}
