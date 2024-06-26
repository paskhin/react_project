import { NewReviewFormContainer } from "../new-review-form-container/container";
import { NavLink, Outlet } from "react-router-dom";

export function Restaurant({ restaurant }) {

  if (!restaurant) {
    return;
  }

  const { menu, id, reviews } = restaurant;

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {!!menu.length && (
        <>
          <NavLink to='menu'>Меню</NavLink>
          <NavLink to='reviews'>Отзывы</NavLink>
          <Outlet />
        </>
      )}
      {!!reviews.length && (
        <>
          <NewReviewFormContainer restaurantId={id}/>
        </>
      )}
    </div>
  )
}
