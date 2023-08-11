import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class CustomersValidator {
  public createCustomerSchema = schema.create({
    customer_name: schema.string(),
    customer_address: schema.string(),
    customer_phone: schema.string(),
  })

  public messages: CustomMessages = {}
}

export default new CustomersValidator()
