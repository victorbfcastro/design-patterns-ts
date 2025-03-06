// FACTORY (Classe deve ser sempre estatica/abstrata com métodos estaticos)

import BankAccount from "../interface/BankAccount";
import CheckingAccount from "./CheckingAccount";
import InvestmentsAccount from "./InvestmentsAccount";
import SavingsAccount from "./SavingsAccount";

export default abstract class BankAccountFactory {

  static create(accountType: string): BankAccount {
    if (accountType === 'checking_account'){
      return new CheckingAccount()
    }

    if (accountType === 'savings_account'){
      return new SavingsAccount()
    }

    if (accountType === 'investment_account'){
      return new InvestmentsAccount()
    }

    throw new Error('Invalid Account Type.')
  }
}