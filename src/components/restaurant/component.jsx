import { Dishes } from "../dishes/component"
import { Reviews } from "../reviews/component"
import { Form } from "../form/component";
import { useSelector } from "react-redux";

export function Restaurant({ activeRestaurantId }) {
  const restaurant = useSelector((state) =>
    state.restaurant.entities[activeRestaurantId]);

  if (!restaurant) {
    return <div>Нет данных</div>
  }

  const { menu, reviews } = restaurant;

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {!!menu.length && (
        <>
          <h3>Меню</h3>
          <Dishes dishesIds={menu} />
        </>
      )}
      {!!reviews.length && (
        <>
          <h3>Отзывы</h3>
          <Reviews reviewIds={reviews} />
          <Form />
        </>
      )}
    </div>
  )
}
