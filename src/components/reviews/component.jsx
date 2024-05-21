import { Review } from "../review/component";

export function Reviews({reviews}) {
  return (
    <ul>
        {reviews.map(({text}) => (
          <li>
            <Review text={text}/>
          </li>
        ))}
    </ul>
  )
}
