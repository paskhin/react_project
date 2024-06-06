import { Review } from "../review/component";

export function Reviews({ reviewIds }) {
  return (
    <ul>
      {reviewIds.map((id) => (
        <li>
          <Review reviewId={id} />
        </li>
      ))}
    </ul>
  )
}
