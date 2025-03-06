// Concrete Strategy

import Tax from "../interface/Tax";

export default class IPI implements Tax {
  taxPercentage: number = 1.05;
 
  calculate(initialValue: number): number
  {
    return initialValue * this.taxPercentage
  }
}