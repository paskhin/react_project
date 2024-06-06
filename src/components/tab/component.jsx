import { useSelector } from "react-redux"
import { Button } from "../button/component"

export function Tab({ tabeId, onClick, isActive }) {
  const tab = useSelector((state) => state.restaurant.entities[tabeId])
  const { name } = tab;
  return (
    <Button
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </Button>
  )
}
