import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class ProductsValidator {
  public createProductSchema = schema.create({
    product_name: schema.string(),
    product_price: schema.number(),
  })

  public messages: CustomMessages = {}
}

export default new ProductsValidator()
