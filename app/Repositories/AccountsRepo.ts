import Database from '@ioc:Adonis/Lucid/Database'
import Accounts from 'App/Models/Accounts'
import Customers from 'App/Models/Customers'

class AccountsRepo {
  public async createUser(payload) {
    return Accounts.create(payload)
  }
  public async findBy(property: string, payload: string | number) {
    return Accounts.findBy(property, payload)
  }

  public async getData() {
    // return Database.from('userorders')
    //   .join('products', 'userorders.product_id', '=', 'products.product_id')
    //   .fullOuterJoin('customers', 'userorders.customer_id', '=', 'customers.id')
    //   .select('customer_name')
    //   .select('product_name')
    //   .select('product_price')
    //   .where('userorders.user_id', payload)
    return 'success'
  }

  // **NOT IN USE
  public async getAllData() {
    // return UserOrder.query()
    //   .join('products', 'userorders.product_id', '=', 'products.product_id')
    //   .fullOuterJoin('customers', 'userorders.customer_id', '=', 'customers.customer_id')
    //   .select('customer_name')
    //   .select('product_name')
    //   .select('product_price')
    //   .where('userorders.user_id', '4781378d-69bc-4461-8555-1fa27c1e7e33')

    // const [product] = await Customers.query().select('*')

    // const result = await product
    //   ?.related('userorders')
    //   .query()
    //   .join('customers', 'userorders.customer_id', '=', 'customers.id')
    //   .select('*')
    const result = 'success'
    return result
  }
}

export default new AccountsRepo()
