import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AccountsValidator from 'App/Validators/AccountsValidation'
import AccountsRepo from 'App/Repositories/AccountsRepo'
import Accounts from 'App/Models/Accounts'
import AppErrorException from 'App/Exceptions/AppErrorException'
import Database from '@ioc:Adonis/Lucid/Database'
import Hash from '@ioc:Adonis/Core/Hash'
import generateToken from 'App/Utils/GenerateToken'

export default class UsersController {
  public async userRegisterCtrl({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: AccountsValidator.registerSchema })

      const userFound = await AccountsRepo.findBy('user_email_id', payload.user_email_id)

      //if user found throws a exception
      if (userFound) {
        throw new AppErrorException('User already registered', 403)
      }
      const user = await Accounts.create(payload)
      response.status(201)
      return user.$original
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }

  public async userLoginCtrl({ request }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: AccountsValidator.loginSchema })
      const userFound = await AccountsRepo.findBy('user_email_id', payload.user_email_id)
      if (!userFound) throw new AppErrorException('User not found', 404)

      const isPasswordMatch = await Hash.verify(userFound.user_password, payload.user_password)
      //   const isPasswordMatch = payload.user_password === userFound.user_password
      if (!isPasswordMatch) throw new AppErrorException('Invalid password', 404)
      const data =
        await Database.rawQuery(`SELECT Customers.customer_name,Products.product_name, Products.product_price 
      FROM ((UserOrders 
        INNER JOIN Products 
        ON UserOrders.product_id = Products.product_id)
          FULL JOIN Customers 
            ON UserOrders.customer_id = Customers.customer_id)`)
      return {
        token: generateToken(userFound.id),
        userFound,
        data,
      }
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
