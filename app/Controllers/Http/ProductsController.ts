import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsValidation from 'App/Validators/ProductsValidation'
import ProductRepo from 'App/Repositories/ProductRepo'
import AppErrorException from 'App/Exceptions/AppErrorException'

export default class ProductsController {
  public async createProduct({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: ProductsValidation.createProductSchema })
      const products = await ProductRepo.createProducts(payload)
      response.status(201)
      return products
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }

  public async AllProduct() {
    try {
      const products = await ProductRepo.getAllProducts()
      return products
    } catch (error) {
      throw new AppErrorException(error.message, error.status)
    }
  }
}
