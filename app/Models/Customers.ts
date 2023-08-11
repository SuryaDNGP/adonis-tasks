import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customers extends BaseModel {
  public static table = 'customers'
  @column({ columnName: 'customer_id', isPrimary: true })
  public id: string

  @column()
  public customer_name: string

  @column()
  public customer_address: string

  @column()
  public customer_phone: string
}
