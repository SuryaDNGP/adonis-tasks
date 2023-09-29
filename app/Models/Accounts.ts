import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column, beforeSave, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import UserOrder from './UserOrder'

// import uuid from 'uuid/v4'

export default class Accounts extends BaseModel {
  public static table = 'users'
  @column({ columnName: 'id', isPrimary: true })
  public id: string
  @column()
  public fullname: string

  @column()
  public email: string

  @column()
  public password: string

  @beforeSave()
  //Used bcrypt , 10 Saltrounds for hashing
  public static async hashPassword(user: Accounts) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
