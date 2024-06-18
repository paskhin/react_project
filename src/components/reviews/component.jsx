import { ReviewContainer } from "../review/container"

export function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <ReviewContainer review={review} />
        </li>
      ))}
    </ul>
  )
}
