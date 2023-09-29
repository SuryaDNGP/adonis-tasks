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

      const userFound = await AccountsRepo.findBy('email', payload.email)

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
      const userFound = await AccountsRepo.findBy('email', payload.email)
      if (!userFound) throw new AppErrorException('User not found', 404)
      console.log(userFound.password, payload.password)
      const isPasswordMatch = await Hash.verify(userFound.password, payload.password)

      //   const isPasswordMatch = payload.user_password === userFound.user_password
      if (!isPasswordMatch) throw new AppErrorException('Invalid password', 404)
      // const data = await AccountsRepo.getData()
      // const data2 = await AccountsRepo.getAllData()

      return {
        status: 'success',

        token: generateToken(userFound.id),
        user_id: userFound?.id,
        email: userFound?.email,
      }
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
