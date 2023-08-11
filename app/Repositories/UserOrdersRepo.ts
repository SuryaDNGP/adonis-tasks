import UserOrder from 'App/Models/UserOrder'

class UserOrdersRepo {
  public async createUserOrders(payload) {
    return UserOrder.createMany([payload])
  }

  public async getAllOrders() {
    return UserOrder.all()
  }
}

export default new UserOrdersRepo()
