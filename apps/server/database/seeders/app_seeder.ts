import User from '#auth/models/user'
import { DilemmaFactory } from '#database/factories/dilemma_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.first()

    await DilemmaFactory.with('propositions', 2).merge({ authorId: user!.id }).createMany(10)
  }
}
