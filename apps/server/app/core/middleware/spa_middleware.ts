import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import type { NextFn } from '@adonisjs/core/types/http'
import fs from 'node:fs'

export default class SpaMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (ctx.request.url().startsWith('/api')) {
      return await next()
    }

    return ctx.response.stream(fs.createReadStream(app.publicPath('index.html')))
  }
}
