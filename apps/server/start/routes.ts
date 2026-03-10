import router from '@adonisjs/core/services/router'

import { controllers } from '#generated/controllers'

router.get('/', [controllers.core.Hello]).prefix('/api')
