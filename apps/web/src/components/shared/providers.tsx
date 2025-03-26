import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/react_query'
import { ThemeProvider } from './theme_provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
