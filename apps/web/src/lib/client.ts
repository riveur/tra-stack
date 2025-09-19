import { createClient } from '@repo/rpc/client'

export const client = createClient({
  baseUrl: import.meta.env.VITE_API_URL || window.location.origin,
})
