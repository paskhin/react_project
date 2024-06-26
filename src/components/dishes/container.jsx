import { Dishes } from "./component"
import { useGetDishesByRestaurantIdQuery } from "../../redux/entities/service/api"
import { useParams } from "react-router-dom";

export function DishesContainer() {
  const {restaurantId} = useParams();
  const { data: dishes } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (!dishes) {
    return;
  }

  return <Dishes dishes={dishes}/>
}
