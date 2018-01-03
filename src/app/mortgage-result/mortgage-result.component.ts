import { Component, OnInit } from '@angular/core';
import {CalcService} from '../services/calc.service';

@Component({
  selector: 'mortgage-result',
  templateUrl: './mortgage-result.component.html',
  styleUrls: ['./mortgage-result.component.sass']
})
export class MortgageResultComponent implements OnInit {

  moPayment: any;

  constructor(private calcService: CalcService ) {
    // this.moPayment = this.calcService.getmoPayment();
    // console.log('result: ', this.moPayment);

    this.calcService.change.subscribe( () => {
      this.moPayment = this.calcService.getmoPayment();
      console.log('result: ', this.moPayment);
    });
  }

  ngOnInit() {
  }

}
