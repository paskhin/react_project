import { createContext } from "react"
import { THEMES } from "./constants"

export const ThemContext = createContext(THEMES.default)
