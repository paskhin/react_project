import { useEffect } from "react"
import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component"
import { useContext } from "react"
import { AuthorisationContext } from "../contexsts/authorization"


export function Dish({ name, price }) {
  const { increment, decrement, count } = useCount();
  const statusAuthorization = useContext(AuthorisationContext);

  useEffect(() => {
    increment()
  }, [increment]);

  useEffect(() => {
    decrement()
  }, [decrement])

  return (
    <>
      <span>{name}</span>
      {statusAuthorization !== 'Войти' ? (
        <>
          <Counter
            value={count}
            increment={increment}
            decrement={decrement}
          />
          {count * price}
        </>
      ) : (
        <>

        </>
      )}
    </>
  )
}
