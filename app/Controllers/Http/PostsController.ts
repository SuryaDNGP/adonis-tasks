import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { schema } from '@ioc:Adonis/Core/Validator'

import Post from 'App/Models/Post'

export default class PostsController {
  public async index() {
    return Post.all()
  }
  public async store({ request, response }: HttpContextContract) {
    const newPostSchema = schema.create({
      name: schema.string({ trim: true }),
      post: schema.string(),
    })
    const payload = await request.validate({ schema: newPostSchema })
    const post = await Post.create(payload)
    response.status(201)
    return post
  }
  public async show({ params }: HttpContextContract) {
    return Post.findOrFail(params.id)
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const post = await Post.findOrFail(params.id)
    post.name = body.name
    post.post = body.post
    return post.save()
  }
  public async destroy({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    response.status(204)
    return post.delete()
  }
}
