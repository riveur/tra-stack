import { MonitorIcon, MoonIcon, SunIcon, type LucideProps } from 'lucide-react'
import { useTheme } from './theme_provider'

export function ThemeIcon(props: LucideProps) {
  const { theme } = useTheme()

  const Icon = theme === 'system' ? MonitorIcon : theme === 'light' ? SunIcon : MoonIcon

  return <Icon {...props} />
}
