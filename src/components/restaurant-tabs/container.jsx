import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/entities/service/api";


export function RestaurantTabsContainer() {

  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Restaurants is loading...</div>
  }

  return (
    <>
      <RestaurantTabs
        restaurants={restaurants}
      />
    </>
  )
}

