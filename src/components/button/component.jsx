import { THEMES } from "../contexsts/them/constants";
import { useTheme } from "../contexsts/them/hooks"
import styles from "./styles.module.scss"
import classNames from "classnames";

export function Button({children, onClick, disabled}) {
  const {theme} = useTheme();
  return (
    <button className={classNames(styles.root, styles.btn, {
      [styles.disabled]: disabled,
      [styles.default]: theme === THEMES.default,
      [styles.alternative]: theme === THEMES.alternative
    })}
     onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
