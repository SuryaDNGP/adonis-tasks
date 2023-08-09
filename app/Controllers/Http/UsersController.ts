import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidation'
import UserRepo from 'App/Repositories/UserRepo'
import AppErrorException from 'App/Exceptions/AppErrorException'

export default class UsersController {
  public async userRegisterCtrl({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: UserValidator.registerSchema })
      const user = await UserRepo.createUser(payload)
      response.status(201)
      return user
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }

  public async userLoginCtrl({ request }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: UserValidator.loginSchema })
      const userFound = await UserRepo.findUser('email', payload.email)
      if (!userFound) throw new AppErrorException('User not found', 404)

      const isPasswordMatch = payload.password === userFound.password
      if (!isPasswordMatch) throw new AppErrorException('Invalid password', 404)
      return payload
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }

  public async userDeleteCtrl({ request, params }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: UserValidator.deleteSchema })
      const userFound = await UserRepo.findOrFailUser(params.id)
      const isPasswordMatch = payload.password === userFound.password
      if (!isPasswordMatch) throw new AppErrorException('Invalid password', 404)

      await userFound.delete()
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
