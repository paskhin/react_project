import { ReviewContainer } from "../review/container"
import styles from "./styles.module.scss"
import classNames from "classnames";
export function Reviews({ reviews }) {
  return (
    <ul className={classNames(styles.root)}>
      {reviews.map((review) => (
        <li>
          <ReviewContainer review={review} />
        </li>
      ))}
    </ul>
  )
}
