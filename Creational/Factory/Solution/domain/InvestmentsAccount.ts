import BankAccount from "../interface/BankAccount";

export default class InvestmentsAccount implements BankAccount {

  accountType: string = 'investments_account';
  
  generateAccount(): void
  {
    // implementacao para criar uma conta corrente
  }
}