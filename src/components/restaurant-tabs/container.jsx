import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/entities/service/api";


export function RestaurantTabsContainer({ onTabClick, activeRestaurantId }) {

  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (isLoading) {
    return <div>Restaurants is loading...</div>
  }

  return (
    <>
      <RestaurantTabs
        onTabClick={onTabClick}
        restaurants={restaurants}
        activeRestaurantId={activeRestaurantId}
      />
    </>
  )
}

