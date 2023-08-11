import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserOrder extends BaseModel {
  public static table = 'userorders'
  @column({ columnName: 'user_orders', isPrimary: true })
  public id: number

  @column()
  public user_id: string

  @column()
  public customer_id: string

  @column()
  public product_id: string

  @column()
  public quantity: number
}
