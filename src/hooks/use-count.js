import { useCallback, useState } from "react";

export const useCount = (min = 0, max = 5, initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(count => count < max ? count + 1 : count)
  }, [max]);

  const decrement = useCallback(() => {
    setCount(count => count > min ? count - 1 : count)
  }, [min]);

  return { count, increment, decrement }
}
