import { useSelector } from "react-redux"
import { Tab } from "../tab/component"

export function Tabs({ onTabClick, activeRestaurantId }) {
  const restaurantIds = useSelector((state) => state.restaurant.ids);

  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab
          tabeId={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
    </div>
  )
}

