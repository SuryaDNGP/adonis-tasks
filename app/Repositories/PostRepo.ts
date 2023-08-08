import Post from 'App/Models/Post'

class PostRepo {
  public async getPost() {
    return Post.all()
  }
  public async createPost(request) {
    return Post.create(request)
  }
  public async findOrFailPost(id) {
    return Post.findOrFail(id)
  }
}

export default new PostRepo()
