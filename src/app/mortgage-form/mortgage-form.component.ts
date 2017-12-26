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
    downPaymentAmount: number,
    downPaymentRate?: number,
    loanAmount?: number,
    loanLength: number,
    interestRate: number,
    annualTax?: number,
    homeInsurance: number
  };
  constructor() {
    // default value
    this.mortgage = {
      homeValue: 300000,
      downPaymentAmount: 60000,
      loanLength: 30,
      interestRate: 4,
      homeInsurance: 800
    };
    let m = this.mortgage;
    m.downPaymentRate = 20; //@Todo do calc
    m.loanAmount = m.homeValue - m.downPaymentAmount;
    m.annualTax = m.homeValue * .01; //1% of homeValue
  }

  ngOnInit() {
  }

}
