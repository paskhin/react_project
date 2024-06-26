import { Link } from "react-router-dom"

export function Tab({ title, to }) {

  return (
    <Link
      to={to}
    >
      {title}
    </Link>
  )
}
