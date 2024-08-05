import { DishContainer } from "../dish/container"
import styles from "./styles.module.scss"
import classNames from "classnames";
export function Dishes({ dishes }) {
  return (
  <>
    <ul className={classNames(styles.root)}>
      {dishes.map((dish) => (
        <li className={classNames(styles.dish)}>
          <DishContainer dish={dish} />
        </li>
      ))}
    </ul>
  </>
  )
}

