import type { HttpContext } from '@adonisjs/core/http'

export default class HelloController {
  async handle({ serialize }: HttpContext) {
    return serialize({ message: 'Hello from server !' })
  }
}
