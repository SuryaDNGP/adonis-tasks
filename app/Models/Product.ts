import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  public static table = 'products'
  @column({ columnName: 'product_id', isPrimary: true })
  public id: string

  @column()
  public product_name: string

  @column()
  public product_price: number
}
