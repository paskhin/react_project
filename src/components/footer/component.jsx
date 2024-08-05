import classNames from "classnames"
import styles from "./styles.module.scss"
import { Logo } from "../logo/component"
export function Footer() {
  return (
    <footer className={classNames(styles.root)}>
      <h2 className="visually-hidden">Footer</h2>
      <Logo />
    </footer>
  )
}
