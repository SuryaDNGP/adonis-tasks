import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AppErrorException from 'App/Exceptions/AppErrorException'
import JWT from 'jsonwebtoken'

export default class Auth {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const rawToken = request.header('authorization')
    if (!rawToken) return response.notFound({ error: 'Authorization Header not found..!' })

    const splittedToken = rawToken?.split(' ')[1]
    if (!splittedToken) return response.unauthorized({ error: 'Invalid Token' })

    try {
      const verifyToken = JWT.verify(splittedToken, 'anykey')
      if (!verifyToken) throw new AppErrorException('User not found', 404)
      return await next()
    } catch (error) {
      return response.unauthorized({ error: 'UnAuthorized User' })
    }
  }
}
