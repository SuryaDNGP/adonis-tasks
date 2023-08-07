import Route from '@ioc:Adonis/Core/Route'

// Route.get('/posts', 'PostsController.posts')
// Route.post('/posts', 'PostsController.createPost')

Route.resource('/posts', 'PostsController').apiOnly()
