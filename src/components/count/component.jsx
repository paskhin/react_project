import { useState } from "react"
import { Button } from "../button/component";
export function Count() {
  const [count, setCount] = useState(0);
  const maxCount = 5;
  const minCount = 0;

  const increment = () => {
    count === maxCount ? setCount(maxCount) : setCount(count + 1);
  };
  const decrement = () => {
    count === minCount ? setCount(minCount) : setCount(count - 1);
  };

  return (
    <div>
      <Button onButtonClick={decrement}> - </Button>
        {count}
      <Button onButtonClick={increment}> + </Button>
    </div>
  )
}
