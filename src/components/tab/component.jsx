import { useContext } from "react"
import { ThemeContext } from "../contexsts/theme"

export function Tab({ name, onClick, isActive }) {
  const theme = useContext(ThemeContext)
  return (
    <button
      style={{backgroundColor: theme}}
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </button>
  )
}
