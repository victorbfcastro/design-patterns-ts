/* [Strategy] é utilizado para situações em que precisamos ficar validando parametros que são tipos primitivos
    para saber como prosseguir no processamento. No exemplo abaixo, temos um usecase responsável por calcular impostos,
    porém o mesmo precisa validar qual imposto foi recebido para efetuar o calculo da taxa. 
    
    Quais problemas temos aqui?
    
    1. Regras de negócio não deveriam ficar dentro do usecase 
    2. Usecase não deveria se preocupar em ter que descobrir qual imposto e taxa deve calcular
    3. Princípio S - Single Responsability está sendo quebrado, visto que o usecase deveria ter que mudar apenas por um único motivo 
    4. Princípio O - Open-Close Principle está sendo quebrado, visto que o usecase precisará ser alterado sempre que um novo imposto surgir
*/

export default class TaxCalculator {

  constructor() {
    
  }

  execute(initialValue: number, tax: string): number {
    if (tax === 'ISS') {
      return initialValue * 1.1
    }

    if (tax === 'ICMS') {
      return initialValue * 1.5
    }

    if (tax === 'IPI') {
      return initialValue * 1.05
    }

    throw new Error(`Tax category is invalid: ${tax}`)
  }
}
