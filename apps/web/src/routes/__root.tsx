import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Outlet, useRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Button } from '@/components/ui/button'
import type { RouterContext } from '@/lib/router'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
  errorComponent: () => {
    const router = useRouter()
    return (
      <div className="min-h-dvh w-full flex flex-col items-center gap-2">
        <main className="min-h-dvh flex justify-center items-center p-4">
          <div className="flex flex-col items-center gap-4">
            <p>Une erreur est survenue</p>
            <Button onClick={() => router.invalidate()}>Actualiser</Button>
          </div>
        </main>
      </div>
    )
  },
})
