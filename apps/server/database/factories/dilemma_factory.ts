import factory from '@adonisjs/lucid/factories'

import Dilemma from '#vote/models/dilemma'
import { PropositionFactory } from './proposition_factory.js'

export const DilemmaFactory = factory
  .define(Dilemma, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      isApproved: true,
    }
  })
  .relation('propositions', () => PropositionFactory)
  .build()
