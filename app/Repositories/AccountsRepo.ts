import Database from '@ioc:Adonis/Lucid/Database'
import Accounts from 'App/Models/Accounts'

class AccountsRepo {
  public async createUser(payload) {
    return Database.table('accounts').insert(payload)
  }
  public async findBy(property: string, payload: string | number) {
    return Accounts.findBy(property, payload)
  }
}

export default new AccountsRepo()
