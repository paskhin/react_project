import { Tab } from "../tab/component"

export function RestaurantTabs({ restaurants, onTabClick, activeRestaurantId }) {

  return (
    <div>
      {restaurants.map(({id, name}) => (
        <Tab
          title={name}
          onClick={() => onTabClick(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
    </div>
  )
}

