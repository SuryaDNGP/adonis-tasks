import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomersValidation from 'App/Validators/CustomersValidation'
import CustomersRepo from 'App/Repositories/CustomersRepo'
import AppErrorException from 'App/Exceptions/AppErrorException'
export default class CustomersController {
  public async createCustomer({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: CustomersValidation.createCustomerSchema })
      const customer = await CustomersRepo.createCustomers(payload)
      response.status(201)
      return customer
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }

  public async allCustomers() {
    try {
      const customers = await CustomersRepo.getAllCustomers()
      return customers
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
