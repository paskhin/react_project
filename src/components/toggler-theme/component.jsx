
import { Button } from "../button/component"
import { useTheme } from "../contexsts/them/hooks"


export function TogglerTheme() {
  const {toggleTheme} = useTheme();
  return (
    <Button onClick={toggleTheme}>Сменить тему</Button>
  )
}
