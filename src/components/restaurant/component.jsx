import { Dishes } from "../dishes/component"
import { Reviews } from "../reviews/component"
export function Restaurant({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <Dishes menu={restaurant.menu}/>
      <h3>Отзывы</h3>
      <Reviews reviews={restaurant.reviews}/>
    </div>
  )
}
