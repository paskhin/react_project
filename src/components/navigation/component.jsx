import { Link } from "react-router-dom";
import styles from "./styles.module.scss"
import classNames from "classnames";

export function Navigation() {
  return (
    <div className={classNames(styles.root)}>
      <Link to='/'>Home</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/restaurants'>Restaurants</Link>
    </div>
  )
}
