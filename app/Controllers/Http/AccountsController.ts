import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AccountsValidator from 'App/Validators/AccountsValidation'
import AccountsRepo from 'App/Repositories/AccountsRepo'
import Accounts from 'App/Models/Accounts'
import AppErrorException from 'App/Exceptions/AppErrorException'
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
      return response.created(user)
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
      const data = await AccountsRepo.getData(userFound.user_id)
      // const data2 = await AccountsRepo.getAllData()

      return {
        token: generateToken(userFound.user_id),
        userFound,
        data,
      }
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
