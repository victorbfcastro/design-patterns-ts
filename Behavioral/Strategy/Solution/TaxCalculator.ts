/* [Strategy] é utilizado para situações em que precisamos ficar validando parametros que são tipos primitivos
    para saber como prosseguir no processamento. No exemplo abaixo, temos um usecase responsável por calcular impostos,
    porém o mesmo precisa validar qual imposto foi recebido para efetuar o calculo da taxa. 
    
    Quais problemas foram resolvidos?
    
    1. Regras de negócio passaram a ficar dentro da camada de dominio
    2. Usecase já nao precisa se preocupar em descobrir qual imposto deve ser aplicado
    3. Princípio S - Single Responsability está sendo respeitado, visto que o usecase agora tem uma unica funcao e objetivo
    4. Princípio O - Open-Close Principle está sendo respeitado, visto que o usecase não precisará de nenhuma alteração caso um novo imposto surja
*/

import Tax from "./interface/Tax";

export default class TaxCalculator {
  constructor(readonly taxType: Tax) {}

  execute(initialValue: number): number {
    return this.taxType.calculate(initialValue)
  }
}
