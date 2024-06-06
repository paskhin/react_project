import { useSelector } from "react-redux"

export function Review({ reviewId }) {
  const review = useSelector((state) => state.review.entities[reviewId]);
  const { text } = review;
  return <span>{text}</span>
}
