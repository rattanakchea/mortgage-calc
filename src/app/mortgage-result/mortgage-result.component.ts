import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';
import { MoPayment } from '../models/interfaces';

@Component({
  selector: 'mortgage-result',
  templateUrl: './mortgage-result.component.html',
  styleUrls: ['./mortgage-result.component.sass']
})
export class MortgageResultComponent implements OnInit {

  moPayment: MoPayment;

  constructor(private calcService: CalcService) {
    // this.moPayment = this.calcService.getmoPayment();
    // console.log('result: ', this.moPayment);

    this.calcService.change.subscribe(() => {
      this.moPayment = this.calcService.getmoPayment();
      console.log('result: ', this.moPayment);
    });
  }

  ngOnInit() {
  }

  getTotal() {
    if (this.moPayment) {
      return this.moPayment.principleAndInterest +
        this.moPayment.tax +
        this.moPayment.insurance +
        this.moPayment.pmi
    }
  }

}
