import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserOrderValidator from 'App/Validators/UserOrderValidation'
import UserOrdersRepo from 'App/Repositories/UserOrdersRepo'
import AppErrorException from 'App/Exceptions/AppErrorException'

export default class UserOrdersController {
  public async createUserOrder({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: UserOrderValidator.userOrderSchema })
      const orders = await UserOrdersRepo.createUserOrders(payload)
      response.status(201)
      return orders
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }

  public async allUserOrders() {
    try {
      const userOrders = await UserOrdersRepo.getAllOrders()
      return userOrders
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
