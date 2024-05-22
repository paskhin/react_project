import { Dishes } from "../dishes/component"
import { Reviews } from "../reviews/component"
export function Restaurant({ restaurant }) {
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
          <Dishes menu={menu} />
        </>
      )}
      {!!reviews.length && (
        <>
          <h3>Отзывы</h3>
          <Reviews reviews={reviews} />
        </>
      )}
    </div>
  )
}
