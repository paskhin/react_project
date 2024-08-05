import { Logo } from "../logo/component";
import { Navigation } from "../navigation/component";
import { UserMenu } from "../user-menu/component";
import styles from "./styles.module.scss"
import classNames from "classnames";

export function Header() {
  return (
    <header className={classNames(styles.root)}>
      <h2 className="visually-hidden">Anyfood - сервис доставки еды</h2>
      <Logo />
      <Navigation />
      <UserMenu />
    </header>
  )
}
