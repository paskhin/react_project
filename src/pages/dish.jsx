import { useParams } from "react-router-dom";
import { Dish as DishView } from "../components/dish/component"
import { useGetDishesByIdQuery } from "../redux/entities/service/api"

export function Dish() {
  const {dishId} = useParams();
  const {data: dish, isFetching} = useGetDishesByIdQuery(dishId);
  if (isFetching) {
    return <div>Loading dish...</div>
  }
  return (
    <DishView dish={dish}/>
  )
}
