/* Aqui já estamos utilizando o padrão [Factory] para evitar um amontoado de 'if' poluindo nossa classe.
    Uma factory nada mais é que uma classe ESTÁTICA que cria outras classes de acordo com os parametros recebidos por ela e devolve
    a instância da classe correta já pronta para ser utilizada.

    Com essa implementação, conseguimos remover todos os 'if' indesejados da nossa classe, que foram jogados pra dentro da classe factory.
*/

import BankAccountCreatorUseCase from "./BankAccountCreatorUseCase"
import BankAccountFactory from "./domain/BankAccountFactory"

export default class Controller {

  constructor() {}

  createBankAccount(request: ControllerRequest): any {
    const accountType = BankAccountFactory.create(request.AccountType)  // factory

    const bankAccountCreator = new BankAccountCreatorUseCase().execute(accountType)

    // restante da implementacao
  }
}

type ControllerRequest = {
  "AccountType": string
}