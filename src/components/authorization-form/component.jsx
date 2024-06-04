import { useState } from "react"
import { Button } from "../button/component"
export function AuthorizationForm({ onCancel, onLogin }) {
  const [name, setName] = useState('');
  return (
    <div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <Button onClick={onCancel}>Cancel</Button>
      <Button onClick={() => {
        onLogin(name);
        setName('')
      }
      }>Login</Button>
    </div>
  )
}
