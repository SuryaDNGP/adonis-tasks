import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostValidation from 'App/Validators/PostValidation'
import PostRepo from 'App/Repositories/PostRepo'

export default class PostsController {
  // *** VIEW POST ***
  public async index({ response }) {
    try {
      response.status(200)
      return PostRepo.getPost()
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  // *** CREATE POST ***
  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(PostValidation)
      const post = PostRepo.createPost(payload)
      response.status(201)
      return post
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  // *** EDIT POST ***
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(PostValidation)
      const post = await PostRepo.findOrFailPost(params.id)
      post.title = payload.title
      post.post = payload.post
      response.status(200)
      return post.save()
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  // *** DELETE POST ***
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const post = await PostRepo.findOrFailPost(params.id)
      response.status(204)
      await post.delete()
      return post
    } catch (error) {
      response.badRequest(error.messages)
    }
  }
}
