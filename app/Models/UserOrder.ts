import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'
import Product from './Product'
import Customers from './Customers'

export default class UserOrder extends BaseModel {
  public static table = 'userorders'
  @column({ columnName: 'user_orders', isPrimary: true })
  public user_orders: number

  @column()
  public user_id: string

  @column()
  public customer_id: string

  @column()
  public product_id: string

  @column()
  public quantity: number

  @belongsTo(() => Accounts, {
    localKey: 'user_id',
    foreignKey: 'user_id',
  })
  public accounts: BelongsTo<typeof Accounts>

  @belongsTo(() => Customers, {
    localKey: 'customer_id',
    foreignKey: 'id',
  })
  public customers: BelongsTo<typeof Customers>

  @belongsTo(() => Product, {
    localKey: 'product_id',
    foreignKey: 'product_id',
  })
  public products: BelongsTo<typeof Product>
}
