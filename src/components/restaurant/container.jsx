import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/entities/service/api";
import { selectEntityFromResult } from "../../redux/entities/service/selectors";
import { useParams } from "react-router-dom";

export function RestaurantContainer() {
  const {restaurantId} = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(restaurantId)
  });


  return <Restaurant restaurant={restaurant}/>
}
