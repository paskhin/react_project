import { Dishes } from "./component"
import { useGetDishesByRestaurantIdQuery } from "../../redux/entities/service/api"

export function DishesContainer({ restaurantId }) {
  const { data: dishes, isFetching } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (!dishes) {
    return;
  }

  return <Dishes dishes={dishes}/>
}
