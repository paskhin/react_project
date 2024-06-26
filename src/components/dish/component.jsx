import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../counter/component"
import { selectDishCount } from "../../redux/ui/selectors";
import { decrement, increment } from "../../redux/ui/cart";
import { useCallback } from "react";
import { Link } from "react-router-dom";

export function Dish({ dish }) {
  const { id } = dish;
  const { price, name } = dish;

  const count = useSelector((state) => selectDishCount(state, id))
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(increment(id)),
    [id]
  );
  const handleDecrement = useCallback(
    () => dispatch(decrement(id)),
    [id]
  );

  return (
    <>
      <Link to={`/dish/${id}`}>{name}</Link>
      <>
        <Counter
          value={count}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
        {count * price}
      </>
    </>
  )
}
