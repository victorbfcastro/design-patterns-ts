/* Imagine que temos um cenário onde nosso Controller receberá um requisição solicitacao uma abertura de conta bancária.
    O controller irá receber um objeto com o tipo da conta a ser aberta: ContaCorrente, ContaPoupanca ou ContaInvestimento 
    e deverá chamar o usecase responsável por efetuar a abertura dessa conta. 
    
    Sem a utilização do padrão [Factory] observamos que será necessário aplicar 'if' para cada tipo de conta possível de ser gerada,
    alem disso, sempre que um novo modelo de conta surgir, teremos que modificar nosso controller para adicionar um novo 'if', ferindo
    o principio do Open-Close Principle e do Single Responsability Principle.
*/

import CheckingAccount from "./domain/CheckingAccount"
import InvestmentsAccount from "./domain/InvestmentsAccount"
import SavingsAccount from "./domain/SavingsAccount"

export default class Controller {

  constructor() {}

  createBankAccount(request: ControllerRequest): void {
    let accountType
    if (request.AccountType === 'checking_account'){
      accountType = new CheckingAccount()
    }

    if (request.AccountType === 'savings_account'){
      accountType = new SavingsAccount()
    }

    if (request.AccountType === 'investment_account'){
      accountType = new InvestmentsAccount()
    }
  }
}

type ControllerRequest = {
  "AccountType": string
}