import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/register', 'AccountsController.userRegisterCtrl')
  Route.post('/login', 'AccountsController.userLoginCtrl')
  Route.delete('/:id', 'AccountsController.userDeleteCtrl')
  Route.get('/', 'AccountsController.userCtrl')
  Route.post('/products/create-product', 'ProductsController.createProduct').middleware('auth')
  Route.get('/products', 'ProductsController.AllProduct').middleware('auth')
  Route.get('/orders', 'UserOrdersController.allUserOrders').middleware('auth')
  Route.post('/orders/create-order', 'UserOrdersController.createUserOrder').middleware('auth')
  Route.post('/customers/create-customer', 'CustomersController.createCustomer').middleware('auth')
  Route.get('/customers', 'CustomersController.allCustomers').middleware('auth')
}).prefix('/api/v1/users')
