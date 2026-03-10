import { createClient } from '@repo/rpc/client'
import { createTuyauReactQueryClient } from '@tuyau/react-query'

export const client = createClient({
  baseUrl: import.meta.env.VITE_API_URL || window.location.origin,
  headers: { Accept: 'application/json' },
})

export const urlFor = client.urlFor

export const tuyau = createTuyauReactQueryClient({ client })
