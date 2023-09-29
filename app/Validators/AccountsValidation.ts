import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class AccountsValidator {
  public registerSchema = schema.create({
    fullname: schema.string(),
    email: schema.string([rules.email()]),
    password: schema.string(),
  })

  public loginSchema = schema.create({
    email: schema.string([rules.email()]),
    password: schema.string(),
  })

  public messages: CustomMessages = {}
}

export default new AccountsValidator()
