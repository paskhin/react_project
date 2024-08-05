import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import classNames from "classnames";
export function Tab({ title, to, url, description }) {

  return (
    <Link
    className={classNames(styles.root)} to={to}
    >
      <div className={classNames(styles.imageContainer)}>
        <img src={url} alt="" />
      </div>
      <div className={classNames(styles.textContainer)}>
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
    </Link>
  )
}
