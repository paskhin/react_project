import { THEMES } from "../contexsts/them/constants";
import { useTheme } from "../contexsts/them/hooks"

export function Button({children, onClick, disabled}) {
  const {theme} = useTheme();
  return (
    <button style={{backgroundColor: theme === THEMES.default ? 'lightGray' : 'tomato'}} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
