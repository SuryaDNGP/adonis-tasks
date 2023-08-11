import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'

class UserOrderValidator {
  public userOrderSchema = schema.create({
    user_id: schema.string(),
    product_id: schema.string(),
    quantity: schema.number(),
  })

  public messages: CustomMessages = {}
}

export default new UserOrderValidator()
