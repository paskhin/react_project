import { useMemo, useState } from "react";
import { ThemContext } from "./context";
import { THEMES } from "./constants";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.default);
  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme(theme === THEMES.default ? THEMES.alternative : THEMES.default)
    }), [theme]
  );

  return (
    <ThemContext.Provider value={contextValue}>
      {children}
    </ThemContext.Provider>
  )
}
