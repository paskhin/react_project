import { selectDishById } from "../../redux/entities/dish/selectors";
import { Dish } from "./component";
import { useSelector } from "react-redux";

export function DishContainer({ dishId }) {
  const dish = useSelector(state => selectDishById(state, dishId));
  return (
    <Dish dish={dish}/>
  )
}
