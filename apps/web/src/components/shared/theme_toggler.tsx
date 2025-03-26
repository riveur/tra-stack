import { Button } from '../ui/button'
import { useTheme } from './theme_provider'
import { ThemeIcon } from './theme_icon'

export function ThemeToggler({
  size = 'icon',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'onClick'>) {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('system')
        break
      case 'system':
        setTheme('light')
        break
    }
  }

  return (
    <Button size={size} onClick={changeTheme} {...props}>
      <span className="sr-only">Toggle theme</span>
      <ThemeIcon />
    </Button>
  )
}
