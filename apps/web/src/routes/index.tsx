import { createFileRoute } from '@tanstack/react-router'

import { ThemeToggler } from '@/components/shared/theme_toggler'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-6xl font-bold">TRA Stack</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build something great together.
            </p>
          </div>
        </div>
      </div>
      <ThemeToggler className="fixed top-4 right-4 size-8" />
    </>
  )
}
