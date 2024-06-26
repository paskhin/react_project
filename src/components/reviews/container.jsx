import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/entities/service/api";
import { useParams } from "react-router-dom";

export function ReviewsContainer() {
  const {restaurantId} = useParams();
  const { data: reviews } = useGetReviewsByRestaurantIdQuery(restaurantId);
  if (!reviews) {
    return
  }

  return <Reviews reviews={reviews} />
}
