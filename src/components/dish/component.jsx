import { useEffect } from "react"
import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component"

export function Dish({ name, price }) {
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
