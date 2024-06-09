import { DishContainer } from "../dish/container"

export function Dishes({ dishesIds }) {
  return (
    <ul>
      {dishesIds.map((id) => (
        <li>
          <DishContainer dishId={id} />
        </li>
      ))}
    </ul>
  )
}

