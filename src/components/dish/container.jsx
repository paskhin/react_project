import { useGetUsersQuery } from "../../redux/entities/service/api";
import { Dish } from "./component";

export function DishContainer({ dish }) {

  if (!dish) {
    return null;
  }

  return <Dish dish={dish} />
}
