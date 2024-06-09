import { Button } from "../button/component"

export function Tab({ title, onClick, isActive }) {

  return (
    <Button
      onClick={onClick}
      disabled={isActive}
    >
      {title}
    </Button>
  )
}
