import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/posts', 'PostsController').apiOnly()
}).prefix('/api/user/1/')
