/* Nesse exemplo, controller recebe uma requisição com o valor total de uma compra e deve chamar
    usecase responsável por calcular os impostos em cima desse valor. 
*/

import TaxCalculator from "./TaxCalculator";

export default class Controller {

  constructor() {}

  calculateTax (totalValue: number, tax: string): number {
    const taxCalculator = new TaxCalculator()

    return taxCalculator.execute(totalValue, tax)
  }
}