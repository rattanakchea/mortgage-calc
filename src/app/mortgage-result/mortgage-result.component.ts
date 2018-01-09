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

  buildChart() {
    this.doughnutChartLabels = ['Principle + Interest', 'Taxes', 'Insurance'];
    this.doughnutChartData = [this.moPayment.principleAndInterest, this.moPayment.tax, this.moPayment.insurance];

    this.doughnutChartType = 'doughnut';
  }

  onChartClick(event) {
    console.log(event);
  }

   // Doughnut
  //  public doughnutChartLabels:string[] = [];
  //  public doughnutChartData:number[] = [];
   public doughnutChartLabels:string[] = ['Principle + Interest', 'Taxes', 'Insurance'];
   public doughnutChartData:number[] = [0, 0, 0];
   public doughnutChartType:string = 'doughnut';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }


}
