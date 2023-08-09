import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class UserValidator {
  public registerSchema = schema.create({
    fullname: schema.string(),
    email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
  })

  public loginSchema = schema.create({
    email: schema.string([rules.email()]),
    password: schema.string(),
  })

  public deleteSchema = schema.create({
    password: schema.string(),
  })

  public messages: CustomMessages = {}
}

export default new UserValidator()
