import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/register', 'AccountsController.userRegisterCtrl')
  Route.post('/login', 'AccountsController.userLoginCtrl')
  Route.delete('/:id', 'AccountsController.userDeleteCtrl')
  Route.get('/', 'AccountsController.userCtrl')
  Route.post('/products/create-product', 'ProductsController.createProduct')
  Route.get('/products', 'ProductsController.AllProduct')
  Route.get('/orders', 'UserOrdersController.allUserOrders')
  Route.post('/orders/create-order', 'UserOrdersController.createUserOrder')
  Route.post('/customers/create-customer', 'CustomersController.createCustomer')
  Route.get('/customers', 'CustomersController.allCustomers')
}).prefix('/api/v1/users')
