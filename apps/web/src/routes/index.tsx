import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { match } from 'ts-pattern'

import { ThemeToggler } from '@/components/shared/theme_toggler'
import { tuyau } from '@/lib/client'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, status } = useQuery(tuyau.hello.queryOptions({}, { select: (value) => value.data }))

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-16 flex flex-col gap-8 items-center justify-center min-h-screen text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-6xl font-bold">TRA Stack</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build something great together.
            </p>
          </div>
          <pre>
            API:{' '}
            {match(status)
              .with('pending', () => 'Loading...')
              .with('error', () => 'Error.')
              .with('success', () => data!.message)
              .otherwise(() => null)}
          </pre>
        </div>
      </div>
      <ThemeToggler className="fixed top-4 right-4 size-8" />
    </>
  )
}
