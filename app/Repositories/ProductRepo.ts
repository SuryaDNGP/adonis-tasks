import Product from 'App/Models/Product'

class ProductsRepo {
  public async createProducts(payload) {
    return Product.createMany([payload])
  }

  public async getAllProducts() {
    return Product.all()
  }
}

export default new ProductsRepo()
