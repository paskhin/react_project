import { Count } from "../count/component"
export function Dish({name}) {
  return (
    <>
    <span>{name}</span>
    <Count />
    </>
  )
}
