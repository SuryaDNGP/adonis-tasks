import Database from '@ioc:Adonis/Lucid/Database'
import Accounts from 'App/Models/Accounts'
import Product from 'App/Models/Product'
import UserOrder from 'App/Models/UserOrder'

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

  public async getAllData(payload) {
    // return UserOrder.query()
    //   .join('products', 'userorders.product_id', '=', 'products.product_id')
    //   .fullOuterJoin('customers', 'userorders.customer_id', '=', 'customers.customer_id')
    //   .select('customer_name')
    //   .select('product_name')
    //   .select('product_price')
    //   .where('userorders.user_id', '4781378d-69bc-4461-8555-1fa27c1e7e33')
    return Product.query()
      .join('products', 'userorders.product_id', '=', 'products.product_id')
      .fullOuterJoin('customers', 'userorders.customer_id', '=', 'customers.customer_id')
      .select('products.product_name')
      .from('userorders')
      .where('userorders.user_id', '4781378d-69bc-4461-8555-1fa27c1e7e33')
  }
}

export default new AccountsRepo()
