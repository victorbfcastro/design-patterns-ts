import BankAccount from "../interface/BankAccount";

export default class CheckingAccount implements BankAccount {

  accountType: string = 'checking_account';
  
  generateAccount(): void
  {
    // implementacao para criar uma conta corrente
  }
}