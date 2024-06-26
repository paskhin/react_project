import { DishContainer } from "../dish/container"

export function Dishes({ dishes }) {
  return (
  <>
    <ul>
      {dishes.map((dish) => (
        <li>
          <DishContainer dish={dish} />
        </li>
      ))}
    </ul>
  </>
  )
}

