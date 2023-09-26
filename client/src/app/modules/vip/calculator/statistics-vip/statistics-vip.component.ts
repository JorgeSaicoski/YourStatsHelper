import { Component } from '@angular/core';
import { Statistics } from '@model/statistics.model';

@Component({
  selector: 'app-statistics-vip',
  templateUrl: './statistics-vip.component.html',
})
export class StatisticsVipComponent {
  receivedDataCalculated: Statistics= {};

  handleDataFromCalculate(data: Statistics) {
    this.receivedDataCalculated = data;
    console.log(data)
  }

}
