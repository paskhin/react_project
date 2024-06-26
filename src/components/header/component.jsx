import { TogglerTheme } from "../toggler-theme/component";
import { AuthorizationButton } from "../authorization-button/component";
import { ContainerCartIndicator } from "../cart-indicator/container";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <h2>Header</h2>
      <Link to='/'>Home</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/restaurants'>Restaurants</Link>
      <TogglerTheme />
      <AuthorizationButton />
      <ContainerCartIndicator />
    </header>
  )
}
