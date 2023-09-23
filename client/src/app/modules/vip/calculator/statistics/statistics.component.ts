import { Component } from '@angular/core';
import { Statistics } from '@model/statistics.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  receivedDataCalculated: Statistics= {};

  handleDataFromCalculate(data: Statistics) {
    this.receivedDataCalculated = data;
    console.log(data)
  }

}
