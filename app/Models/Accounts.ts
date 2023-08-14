import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
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

  @beforeSave()
  //Used bcrypt , 10 Saltrounds for hashing
  public static async hashPassword(user: Accounts) {
    if (user.$dirty.user_password) {
      user.user_password = await Hash.make(user.user_password)
    }
  }
}