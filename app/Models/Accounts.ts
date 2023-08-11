import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
// import uuid from 'uuid/v4'

export default class Accounts extends BaseModel {
  public static table = 'accounts'

  @column({ columnName: 'user_id', isPrimary: true })
  public id: string

  @column()
  public user_full_name: string

  @column()
  public user_email_id: string

  @column()
  public user_password: string
}
