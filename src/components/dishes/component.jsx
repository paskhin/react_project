import { Dish } from "../dish/component"

export function Dishes({ dishesIds }) {
  return (
    <ul>
      {dishesIds.map((id) => (
        <li>
          <Dish dishId={id} />
        </li>
      ))}
    </ul>
  )
}

