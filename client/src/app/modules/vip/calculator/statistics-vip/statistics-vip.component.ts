import { Component } from '@angular/core';
import { IStatistics } from 'src/app/interfaces/statistics.model';

@Component({
  selector: 'app-statistics-vip',
  templateUrl: './statistics-vip.component.html',
})
export class StatisticsVipComponent {
  receivedDataCalculated: IStatistics= {};

  handleDataFromCalculate(data: IStatistics) {
    this.receivedDataCalculated = data;
  }

}
