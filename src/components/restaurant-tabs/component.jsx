import { useSearchParams } from "react-router-dom"
import { Tab } from "../tab/component"
import styles from "./styles.module.scss"
import classNames from "classnames";

export function RestaurantTabs({ restaurants }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') || '';

  return (
    <div className={classNames(styles.root)}>
      <input className={classNames(styles.input)} type="text"
        placeholder="Искать ресторан"
        value={searchValue}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      <div className={classNames(styles.tabs)}>
        {restaurants
          .filter(
            ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
          .map(({ id, name, img, description }) => (
            <div className={classNames(styles.tab)}>
              <Tab
                title={name}
                to={`${id}`}
                url={img}
                description={description}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

