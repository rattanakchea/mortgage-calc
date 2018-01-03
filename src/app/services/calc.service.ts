import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class CalcService {

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  moPayment: {
    principleAndInterest: number,
    tax: number,
    insurance: number,
    pmi: number
  }

  getmoPayment() {
    return this.moPayment;
  }

  constructor() { }

  // pure function to calculate mortgage

  /**
   * 
   * @param mortgage
   * @param extras
   * @return moPayment
   */
  calc (mortgage: any, extras: any) {
    
    console.log('mortgage object: ', mortgage);
    console.log('extras object: ', extras);

    let principle = extras.loanAmount;
    let propertyTaxes = extras.annualTax;
    let insurance = mortgage.homeInsurance;

    // monthly
    let moTaxes = propertyTaxes/12;
    let moIns = insurance/12;
    let moPMI = 1; // dummy number for now

    //abstraction
    //@TODO Mortgage formula

    this.moPayment = {
      principleAndInterest: 1145.80,
      tax: 300,
      insurance: 66.67,
      pmi: 0
    }

    this.change.emit(this.moPayment);

  }

}
