import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/register', 'UsersController.userRegisterCtrl')
  Route.post('/login', 'UsersController.userLoginCtrl')
  Route.delete('/:id', 'UsersController.userDeleteCtrl')
  Route.get('/', 'UsersController.userCtrl')
}).prefix('/api/v1/users')
