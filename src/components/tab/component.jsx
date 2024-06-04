import { Button } from "../button/component"

export function Tab({ name, onClick, isActive }) {

  return (
    <Button
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </Button>
  )
}
