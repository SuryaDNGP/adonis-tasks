import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class AccountsValidator {
  public registerSchema = schema.create({
    user_full_name: schema.string(),
    user_email_id: schema.string([rules.email()]),
    user_password: schema.string(),
  })

  public loginSchema = schema.create({
    user_email_id: schema.string([rules.email()]),
    user_password: schema.string(),
  })

  public messages: CustomMessages = {}
}

export default new AccountsValidator()
