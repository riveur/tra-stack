import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'

export function Loading({
  children = <span>Chargement en cours...</span>,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 [&_svg]:size-16 [&_svg]:animate-spin',
        className
      )}
      {...props}
    >
      <Spinner variant="ring" />
      {children}
    </div>
  )
}
