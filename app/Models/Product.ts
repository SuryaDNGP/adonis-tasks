import { BaseModel, HasMany, ManyToMany, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import UserOrder from './UserOrder'

export default class Product extends BaseModel {
  public static table = 'products'
  @column({ columnName: 'product_id', isPrimary: true })
  public id: string

  @column()
  public product_name: string

  @column()
  public product_price: number

  @hasMany(() => UserOrder)
  public userorders: HasMany<typeof UserOrder>
}
