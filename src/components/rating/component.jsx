import { Button } from "../button/component"
export function Rating({ onRatingClick, maxRating = 15, value }) {
  return (
    <div>
      <span>Raiting</span>
      {new Array(maxRating).fill(null).map((_, index) => (
        <Button
          disabled={value === (index + 1)}
          onClick={() => onRatingClick(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  )
}
