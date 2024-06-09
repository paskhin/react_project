import { ReviewContainer } from "../review/container"

export function Reviews({ reviewIds }) {
  return (
    <ul>
      {reviewIds.map((id) => (
        <li>
          <ReviewContainer reviewId={id} />
        </li>
      ))}
    </ul>
  )
}
