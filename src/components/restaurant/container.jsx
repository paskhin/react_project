import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export function RestaurantContainer({ activeRestaurantId }) {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, activeRestaurantId));

  return <Restaurant restaurant={restaurant} />
}
