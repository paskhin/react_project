import { RestaurantTab} from "../restaurant-tab/container"

export function RestaurantTabs({ restaurantIds, onTabClick, activeRestaurantId }) {

  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTab
          id={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
    </div>
  )
}

