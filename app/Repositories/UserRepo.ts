import User from 'App/Models/User'

class UserRepo {
  public async getUser() {
    return User.all()
  }
  public async createUser(request) {
    return User.create(request)
  }
  public async findOrFailUser(id) {
    return User.findOrFail(id)
  }
  public async findUser(property: string, value: string | number) {
    return User.findBy(property, value)
  }
}

export default new UserRepo()
