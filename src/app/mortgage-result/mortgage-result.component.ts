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
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartData = [350, 450, 100];

    this.doughnutChartType = 'doughnut';
  }

  onChartClick(event) {
    console.log(event);
  }

   // Doughnut
   public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData:number[] = [1, 1, 1];
   public doughnutChartType:string = 'doughnut';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }


}
