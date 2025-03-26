import { BaseSchema } from '@adonisjs/lucid/schema'

import { UserRole } from '#auth/enums/user_role'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('username').notNullable()
      table.string('discord_id').nullable()
      table.string('avatar_url').nullable()
      table.enum('role', Object.values(UserRole)).defaultTo(UserRole.USER).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
