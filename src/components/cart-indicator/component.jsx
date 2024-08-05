import styles from "./styles.module.scss"
import classNames from "classnames";

export function CartIndicator({ count, onClearClick }) {
  return <div className={classNames(styles.root)}>
    <span className={classNames(styles.cart)}>
      Cart: {count}
    </span>
    {count > 0 && <button onClick={onClearClick}>Clear</button>}

  </div>
}
