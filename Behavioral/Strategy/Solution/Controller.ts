/* Nesse exemplo, controller recebe uma requisição com o valor total de uma compra e deve chamar
    usecase responsável por calcular os impostos em cima desse valor. Com a implementação do Strategy,
    estamos permitindo que o usecase respeite os princípios SOLID, porém o controller vai seguir com o princípio
    Open-Close sendo quebrado, pois estamos validando cada tipo de imposto aqui e caso novos impostos surjam, teremos que
    modificar essa classe. Para esse problema, é recomendado a utilização do pattern [Factory] juntamente com o [Strategy].
*/

import ICMS from "./domain/ICMS";
import IPI from "./domain/IPI";
import ISS from "./domain/ISS";
import Tax from "./interface/Tax";
import TaxCalculator from "./TaxCalculator";

export default class Controller {

  constructor() {}

  calculateTax (initialValue: number, tax: string): number {
    let taxType

    if (tax === 'ISS') {
      taxType = new ISS()
    }
    
    if (tax === 'ICMS') {
      taxType = new ICMS()
    }
    
    if (tax === 'IPI') {
      taxType = new IPI()
    }

    if (!taxType) throw new Error(`Invalid Tax Type`)

    const taxCalculator = new TaxCalculator(taxType)

    return taxCalculator.execute(initialValue)
  }
}