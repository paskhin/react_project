import { NewReviewFormContainer } from "../new-review-form-container/container";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles.module.scss"
import classNames from "classnames";

export function Restaurant({ restaurant }) {

  if (!restaurant) {
    return;
  }

  const { menu, id, reviews } = restaurant;

  return (
    <div className={classNames(styles.root)}>
      <h2>{restaurant.name.toUpperCase()}</h2>
      {!!menu.length && (
        <div>
          <div className={classNames(styles.subMenu)}>
            <NavLink className={classNames(styles.menuTab)} to='menu'>Меню</NavLink>
            <NavLink className={classNames(styles.reviewsTab)} to='reviews'>Отзывы</NavLink>
          </div>
          <Outlet />
        </div>
      )}
      {!!reviews.length && (
        <>
          <NewReviewFormContainer restaurantId={id} />
        </>
      )}
    </div>
  )
}
