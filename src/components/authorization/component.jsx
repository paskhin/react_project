import { useContext } from "react"
import { AuthorisationContext } from "../contexsts/authorization"
import { ThemeContext } from "../contexsts/theme"

export function Authorization({ isAuthorization }) {
  const theme = useContext(ThemeContext)
  const statusAuthorization = useContext(AuthorisationContext);
  let content =
    statusAuthorization === 'Войти' ? (
      <button
        style={{ backgroundColor: theme }}
        onClick={isAuthorization}
      >
        {statusAuthorization}
      </button>
    ) : (
      <>
        <span style={{color: 'red'}}>{statusAuthorization}</span>
        <button
          style={{ backgroundColor: theme }}
          onClick={isAuthorization}
        >
          Выйти
        </button>
      </>
    );

  return <>
    {content}
  </>

}

