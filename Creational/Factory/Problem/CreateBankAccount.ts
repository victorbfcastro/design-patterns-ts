/* Nesse exemplo, estamos utilizando o padrão [Strategy] para evitar que a classe de usecase precise validar qual tipo de conta
    bancária ele precisaria cadastrar, além de manter o usecase livre de regras de negócio e respeitando os principios do Single Responsability
    e Open-Close Principle.
*/

import BankAccount from "./interface/BankAccount";

export default class CreateBankAccountUseCase {

  constructor() {}

  execute(account: BankAccount): void {
    account.generateAccount()
  }
}