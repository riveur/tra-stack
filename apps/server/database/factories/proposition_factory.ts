import factory from '@adonisjs/lucid/factories'

import Proposition from '#vote/models/proposition'
import stringHelpers from '@adonisjs/core/helpers/string'

export const PropositionFactory = factory
  .define(Proposition, async ({ faker }) => {
    const name = faker.science.chemicalElement().name
    return {
      name,
      slug: stringHelpers.slug(`${name}-${faker.string.nanoid()}`),
      imageUrl: faker.image.url(),
      isApproved: true,
    }
  })
  .build()
