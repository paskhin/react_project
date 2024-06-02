import { useContext } from "react"
import { ThemeContext } from "../contexsts/theme"
export function Rating({ onRatingClick, maxRating = 15, value }) {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <span>Raiting</span>
      {new Array(maxRating).fill(null).map((_, index) => (
        <button
          style={{ backgroundColor: theme }}
          disabled={value === (index + 1)}
          onClick={() => onRatingClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}
