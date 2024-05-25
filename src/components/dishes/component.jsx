import { Dish } from "../dish/component"

export function Dishes({menu}) {
  return (
    <ul>
      {menu.map(({name, price}) => (
        <li>
          <Dish name={name} price={price}/>
        </li>
      ))}
    </ul>
  )
}
