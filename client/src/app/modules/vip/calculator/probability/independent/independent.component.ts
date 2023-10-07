import { Component } from '@angular/core';
import { IMessage } from '@model/message.model';


@Component({
  selector: 'independent-probability',
  templateUrl: './independent.component.html'
})

export class IndependentComponent {

  totalPossibleOutcomes: number = 1;
  numberOfDesiredOutcomes: number = 1;
  numberOfRepetitions: number = 1;
  calculationMethod: string = "getNumberOnce";
  calculatedProbability: number = 0;
  message: IMessage = {
    show: false
  };

  calculateProbability() {
    if (this.totalPossibleOutcomes < this.numberOfDesiredOutcomes) {
      this.message = {
        show: true,
        category: "error",
        message: "The total possible outcomes cannot be fewer than the desired outcomes."
      };
      return;
    }

    const singleOutcomeProbability = this.numberOfDesiredOutcomes / this.totalPossibleOutcomes;

    switch (this.calculationMethod) {
      case "getNumberOnce": {
        this.calculatedProbability = -(Math.pow(-(singleOutcomeProbability - 1), this.numberOfRepetitions) - 1) * 100;
        break;
      }
      case "inRow": {
        this.calculatedProbability = Math.pow(singleOutcomeProbability, this.numberOfRepetitions) * 100;
        break;
      }
      default: {
        this.calculatedProbability = singleOutcomeProbability * 100;
        break;
      }
    }

    if (this.calculatedProbability < 0) {
      this.message = {
        show: true,
        category: "error",
        message: "Please disregard the negative sign as probability cannot be negative."
      };
    } else {
      this.message.show = false;
    }
  }
}

