import { useContext } from "react"
import { ThemeContext } from "../contexsts/theme"
export function ThemeToggle({onChange}) {
  const theme = useContext(ThemeContext)
  return (
    <button style={{backgroundColor: theme}} onClick={onChange}>Сменить тему</button>
  )
}
