import router from '@adonisjs/core/services/router'

router
  .get('/', async ({ response }) => {
    response.ok({ message: 'Hello world' })
  })
  .prefix('/api')
