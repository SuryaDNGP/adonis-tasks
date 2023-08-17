import {
  BaseModel,
  BelongsTo,
  ManyToMany,
  belongsTo,
  column,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'
import Product from './Product'
import Customers from './Customers'

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

  @belongsTo(() => Accounts)
  public accounts: BelongsTo<typeof Accounts>

  @belongsTo(() => Customers)
  public customers: BelongsTo<typeof Customers>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
