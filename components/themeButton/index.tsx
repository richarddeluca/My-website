import { useEffect, useState, ComponentProps } from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { lightTheme } from '../../stitches.config'

export function ThemeButton({ ...ButtonProps }: ComponentProps<'li'>) {
  const [theme, setTheme] = useState('theme-default')

  useEffect(() => {
    document.body.classList.remove('theme-default', lightTheme)
    document.body.classList.add(theme)
  }, [theme])

  return (
    <li
      {...ButtonProps}
      onClick={() => {
        setTheme(theme === 'theme-default' ? lightTheme : 'theme-default')
      }}
    >
      {theme === 'theme-default' ? (
        <RiMoonClearFill />
      ) : (
        <RiSunFill color="#db4" />
      )}
    </li>
  )
}
