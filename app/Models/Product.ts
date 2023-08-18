import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import UserOrder from './UserOrder'

export default class Product extends BaseModel {
  public static table = 'products'
  @column({ columnName: 'product_id', isPrimary: true })
  public product_id: string

  @column()
  public product_name: string

  @column()
  public product_price: number

  @hasMany(() => UserOrder, {
    localKey: 'product_id',
    foreignKey: 'product_id',
  })
  public userorders: HasMany<typeof UserOrder>
}
