import BankAccount from "./interface/BankAccount";

export default class BankAccountCreatorUseCase {

  constructor() {}

  execute(account: BankAccount): string {
    const contaCriada = account.generateAccount()

    return `Conta criada com sucesso: ${contaCriada}`
  }
}