import { Component, EventEmitter, Output } from '@angular/core';
import { Statistics } from '@model/statistics.model';

@Component({
  selector: 'statistics-calculator',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Output() calculateStatisticsEvent = new EventEmitter<Statistics>();

  inputNumbers = '';
  statistics: Statistics = {}
  statisticsCalculated = false;
  percentileCalculated = false;

  calculateStatistics() {
    const numbers = this.inputNumbers.split(',').map((numStr) => parseFloat(numStr.trim()));

    if (numbers.length === 0 || numbers.some(isNaN)) {
      alert('Invalid input. Please enter valid numbers separated by commas.');
      return;
    }

    this.statistics.mean = this.calculateMean(numbers);
    this.statistics.median = this.calculateMedian(numbers);
    this.statistics.mode = this.calculateMode(numbers);
    this.statistics.range = this.calculateRange(numbers);
    this.statistics.variance = this.calculateVariance(numbers);
    this.statistics.standardDeviation = this.calculateStandardDeviation(numbers);
    this.statisticsCalculated = true;

    this.calculateStatisticsEvent.emit(this.statistics)
    
  }

  calculateMean(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  }

  calculateMedian(numbers: number[]): number {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
  }

  calculateMode(numbers: number[]): number[] {
    const numberCounts = new Map<number, number>();
    let maxCount = 0;
    const modes: number[] = [];

    for (const num of numbers) {
      const count = (numberCounts.get(num) || 0) + 1;
      numberCounts.set(num, count);

      if (count > maxCount) {
        maxCount = count;
        modes.length = 0;
        modes.push(num);
      } else if (count === maxCount) {
        modes.push(num);
      }
    }

    return modes;
  }

  calculateRange(numbers: number[]): number {
    return Math.max(...numbers) - Math.min(...numbers);
  }

  calculateVariance(numbers: number[]): number {
    const mean = this.calculateMean(numbers);
    const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
    return this.calculateMean(squaredDifferences);
  }

  calculateStandardDeviation(numbers: number[]): number {
    return Math.sqrt(this.calculateVariance(numbers));
  }
  calculatePercentile() {
    const numbers = this.inputNumbers.split(',').map((numStr) => parseFloat(numStr.trim()));

    if (numbers.length === 0 || numbers.some(isNaN) || this.statistics.percentile === undefined || this.statistics.percentile < 0 || this.statistics.percentile > 100) {
      alert('Invalid input. Please enter valid numbers separated by commas and a valid percentile (0-100).');
      return;
    }

    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const percentileIndex = Math.floor((this.statistics.percentile / 100) * (sortedNumbers.length - 1));


    this.statistics.calculatedPercentile = sortedNumbers[percentileIndex];

    this.percentileCalculated = true;

    this.calculateStatisticsEvent.emit(this.statistics)
  }

}
