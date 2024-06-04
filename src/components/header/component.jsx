import { TogglerTheme } from "../toggler-theme/component";
import { AuthorizationButton } from "../authorization-button/component";
export function Header() {
  return (
    <header>
      <h2>Header</h2>
      <TogglerTheme />
      <AuthorizationButton />
    </header>
  )
}
