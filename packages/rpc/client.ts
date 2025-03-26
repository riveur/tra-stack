import { ApiDefinition, createTuyau, TuyauOptions } from "@tuyau/client";

import { api } from '@repo/server/api'

export const client = createTuyau({
  api,
  // @ts-ignore 
  baseUrl: import.meta.env.VITE_API_URL,
})

export function createClient<T extends ApiDefinition>(options?: Omit<TuyauOptions<T>, 'api' | 'baseUrl'>) {
  return createTuyau({
    api,
    // @ts-ignore
    baseUrl: import.meta.env.VITE_API_URL,
    ...options
  })
}