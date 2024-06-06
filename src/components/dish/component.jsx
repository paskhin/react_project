import { useEffect } from "react"
import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component"
import { useSelector } from "react-redux";

export function Dish({ dishId }) {
  const dish = useSelector((state) => state.dish.entities[dishId]);
  const { price, name } = dish;
  const { increment, decrement, count } = useCount();

  useEffect(() => {
    increment()
  }, [increment]);

  useEffect(() => {
    decrement()
  }, [decrement])

  return (
    <>
      <span>{name}</span>
      <>
        <Counter
          value={count}
          increment={increment}
          decrement={decrement}
        />
        {count * price}
      </>
    </>
  )
}
