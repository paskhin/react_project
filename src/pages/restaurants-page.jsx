import styles from "./styles.module.scss"
import classNames from "classnames";
import { RestaurantTabsContainer } from "../components/restaurant-tabs/container"
import { SiteBar } from "../components/site-bar/component"
import { store } from "../redux"
import { Outlet } from "react-router-dom";

export function RestaurantsPage() {
  if (!store) {
    return 'Нет данных'
  }
  return (
    <div className={classNames(styles.root)}>
      <SiteBar />
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  )
}
