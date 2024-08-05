import { TogglerTheme } from "../toggler-theme/component";
import { AuthorizationButton } from "../authorization-button/component";
import { ContainerCartIndicator } from "../cart-indicator/container";
import styles from "./styles.module.scss"
import classNames from "classnames";

export function UserMenu() {
  return (
    <div className={classNames(styles.root)}>
      <ContainerCartIndicator />
      <AuthorizationButton />
      <TogglerTheme />
    </div>
  )
}
