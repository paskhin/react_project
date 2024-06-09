import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { useState } from "react"

export function Restaurants() {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  return (
    <>
      <RestaurantTabsContainer
      onTabClick={(id) => setActiveRestaurantId(id)}
      activeRestaurantId={activeRestaurantId}
      />
      <RestaurantContainer activeRestaurantId={activeRestaurantId} />
    </>
  )
}
