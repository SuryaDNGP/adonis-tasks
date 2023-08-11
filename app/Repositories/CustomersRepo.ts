import Customers from 'App/Models/Customers'

class CustomersRepo {
  public async createCustomers(payload) {
    return Customers.createMany([payload])
  }

  public async getAllCustomers() {
    return Customers.all()
  }
}

export default new CustomersRepo()
