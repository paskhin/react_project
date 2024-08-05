import { Button } from "../button/component"
import styles from "./styles.module.scss"
import classNames from "classnames";
export function Counter({value, increment, decrement, min = 0, max = 5}) {
  return (
    <div className={classNames(styles.root)}>
      <Button onClick={decrement} disabled={value === min}>
        -
      </Button>
      <span className={classNames(styles.value)}>{value}</span>
      <Button onClick={increment} disabled={value === max}>
        +
      </Button>
    </div>
  )
}
