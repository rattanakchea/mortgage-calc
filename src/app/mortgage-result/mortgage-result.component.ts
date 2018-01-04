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

      this.buildChart();
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

  chartOptions = {};
  chartData = [];
  chartLabels = [];

  buildChart() {
    console.log('build chart');
   this.chartOptions = {
      responsive: true
    };
    this.chartData = [
      { data: [330, 600, 260, 700], label: 'Account A' },
      { data: [120, 455, 100, 340], label: 'Account B' },
      { data: [45, 67, 800, 500], label: 'Account C' }
    ];
    this.chartLabels = ['January', 'February', 'Mars', 'April'];
  }

  onChartClick(event) {
    console.log(event);
  }




}
