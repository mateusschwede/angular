import Route from '@ioc:Adonis/Core/Route'

// HABILITAR CORS
Route.group(() => {
  Route.resource('/moments', 'MomentsController').apiOnly()

  Route.post('/moments/:momentId/comments', 'CommentsController.store')
}).prefix('/api')
