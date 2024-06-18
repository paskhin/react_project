import { ReviewsContainer } from "../reviews/container";
import { DishesContainer } from "../dishes/container";
import { NewReviewFormContainer } from "../new-review-form-container/container";

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
          <h3>Меню</h3>
          <DishesContainer restaurantId={id} />
        </>
      )}
      {!!reviews.length && (
        <>
          <h3>Отзывы</h3>
          <ReviewsContainer restaurantId={id} />
          <NewReviewFormContainer restaurantId={id}/>
        </>
      )}
    </div>
  )
}
