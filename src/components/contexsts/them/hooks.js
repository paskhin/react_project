import { useContext } from "react"
import { ThemContext } from "./context"

export const useTheme = () => {
  return useContext(ThemContext)
}
