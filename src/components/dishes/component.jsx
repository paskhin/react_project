import { Dish } from "../dish/component"

export function Dishes({menu}) {
  return (
    <ul>
      {menu.map(({name}) => (
        <li>
          <Dish name={name}/>
        </li>
      ))}
    </ul>
  )
}
