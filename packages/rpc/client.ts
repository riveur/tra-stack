import { ApiDefinition, createTuyau, TuyauOptions } from "@tuyau/client";

import { api } from '@repo/server/api'

export function createClient<T extends ApiDefinition>(options: Omit<TuyauOptions<T>, 'api'>) {
  return createTuyau({
    api,
    ...options
  })
}