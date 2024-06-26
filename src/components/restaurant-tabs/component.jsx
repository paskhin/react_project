import { useSearchParams } from "react-router-dom"
import { Tab } from "../tab/component"

export function RestaurantTabs({ restaurants }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') || '';

  return (
    <div>
      <input type="text"
        value={searchValue}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      {restaurants
        .filter(
          ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
        .map(({ id, name }) => (
          <Tab
            title={name}
            to={`${id}`}
          />
        ))}
    </div>
  )
}

