import Database from '@ioc:Adonis/Lucid/Database'
import Accounts from 'App/Models/Accounts'

class AccountsRepo {
  public async createUser(payload) {
    return Accounts.create(payload)
  }
  public async findBy(property: string, payload: string | number) {
    return Accounts.findBy(property, payload)
  }

  public async getData(payload) {
    return Database.from('userorders')
      .join('products', 'userorders.product_id', '=', 'products.product_id')
      .fullOuterJoin('customers', 'userorders.customer_id', '=', 'customers.customer_id')
      .select('customer_name')
      .select('product_name')
      .select('product_price')
      .where('userorders.user_id', payload)
  }
}
export default new AccountsRepo()
