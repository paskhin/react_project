import { useSelector } from "react-redux"
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";

export function ReviewContainer({ reviewId }) {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  return  <Review review={review}/>
}
