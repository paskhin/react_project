import { useContext } from "react"
import { ThemeContext } from "../contexsts/theme"

export function Counter({value, increment, decrement}) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{backgroundColor: theme}} onClick={decrement}>
        -
      </button>
      {value}
      <button style={{backgroundColor: theme}} onClick={increment}>
      +
      </button>
    </div>
  )
}
