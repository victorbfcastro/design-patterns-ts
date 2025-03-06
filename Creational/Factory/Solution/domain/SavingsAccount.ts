import BankAccount from "../interface/BankAccount";

export default class SavingsAccount implements BankAccount {

  accountType: string = 'savings_account';
  
  generateAccount(): void
  {
    // implementacao para criar uma conta poupanca
  }
}