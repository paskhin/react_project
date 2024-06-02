import { useContext } from "react"
import { ClientContext } from "../contexsts/client";
import { ThemeContext } from "../contexsts/theme"

export function SignInForm({ onCancelClick, getName }) {
  const theme = useContext(ThemeContext)
  let invisible = false;
  const client = useContext(ClientContext);

  return (
    <>
      <span>Name</span>
      <input type="text"
        onChange={(event) => { getName(event) }}
      />
      <button style={{backgroundColor: theme}} onClick={() => { client !== null ? onCancelClick(invisible) : alert('Введите имя') }}>Войти</button>
      <button style={{backgroundColor: theme}} onClick={() => { onCancelClick(invisible) }}>Отмена</button>
    </>
  )
}
