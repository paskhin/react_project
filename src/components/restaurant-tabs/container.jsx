import { useSelector } from "react-redux"
import { RestaurantTabs } from "./component";
import { selectRestayrantIds } from "../../redux/entities/restaurant/selectors";


export function RestaurantTabsContainer({ onTabClick, activeRestaurantId}) {
  const restaurantIds = useSelector((state) => selectRestayrantIds(state));

  if (!restaurantIds) {
    return;
  }

  return (
    <>
      <RestaurantTabs
      onTabClick={onTabClick}
      restaurantIds={restaurantIds}
      activeRestaurantId={activeRestaurantId}
      />
    </>
  )
}

