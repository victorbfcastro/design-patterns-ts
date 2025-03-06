// Concrete Strategy

import Tax from "../interface/Tax";

export default class ICMS implements Tax {
  taxPercentage: number = 1.5;
 
  calculate(initialValue: number): number
  {
    return initialValue * this.taxPercentage
  }
}