// Concrete Strategy

import Tax from "../interface/Tax";

export default class ISS implements Tax {
  taxPercentage: number = 1.1;
 
  calculate(initialValue: number): number
  {
    return initialValue * this.taxPercentage
  }
}