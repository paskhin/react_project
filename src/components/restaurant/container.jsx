import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/entities/service/api";
import { selectEntityFromResult } from "../../redux/entities/service/selectors";

export function RestaurantContainer({ activeRestaurantId }) {

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(activeRestaurantId)
  });


  return <Restaurant restaurant={restaurant}/>
}
