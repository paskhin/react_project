import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/entities/service/api";

export function ReviewsContainer({ restaurantId }) {
  const { data: reviews, isFetching} = useGetReviewsByRestaurantIdQuery(restaurantId);
  if (!reviews) {
    return
  }

  if (isFetching) {
    return <div>Loading...</div>
  }
  return <Reviews reviews={reviews} />
}
