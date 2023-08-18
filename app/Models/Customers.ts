import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import UserOrder from './UserOrder'

export default class Customers extends BaseModel {
  public static table = 'customers'
  @column({ isPrimary: true })
  public id: string

  @column()
  public customer_name: string

  @column()
  public customer_address: string

  @column()
  public customer_phone: string

  @hasMany(() => UserOrder, {
    localKey: 'id',
    foreignKey: 'customer_id',
  })
  public userorders: HasMany<typeof UserOrder>
}
