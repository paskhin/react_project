import { Icon } from "../icon-sprite/component"
import styles from "./styles.module.scss"
import classNames from "classnames";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <Link to='/'>
      <div className={classNames(styles.root)}>
        <Icon className={'logo-svg'} id='logo' />
      </div>
    </Link>
  )
}
