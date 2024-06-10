import { useDispatch, useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { getReviewByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";

export function RestaurantContainer({ activeRestaurantId }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, activeRestaurantId));

  const dispstch = useDispatch();

  useEffect(() => {
    dispstch(getDishesByRestaurantId(activeRestaurantId));
    dispstch(getReviewByRestaurantId(activeRestaurantId))
  }, [])

  return <Restaurant restaurant={restaurant} />
}
