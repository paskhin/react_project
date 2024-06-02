import { useCallback, useState, useContext } from "react";
import { ThemeToggle } from "../theme-toggle/component"
import { Authorization } from "../authorization/component"
import { Modal } from "../modal/component";
import { ClientContext } from "../contexsts/client";
import { SignInForm } from "../sign-in-form/component";
import { ThemeContext } from "../contexsts/theme"

export function Header({ onChange, isAuthorization }) {
  const [isVisible, setIsVisible] = useState(false);
  const [client, setClient] = useState(null);
  const theme = useContext(ThemeContext);

  const onContainerClick = (event) => {
    let modForm = event.target.closest('#modalForm');
    if (!modForm) {
      setIsVisible(false)
    }
  }

  const saveName = useCallback((event) => {
    setClient(event.target.value)
  }, [client]);

  return (
    <header>
      <h2>Header</h2>
      <ThemeToggle onChange={onChange} />
      <Authorization isAuthorization={isAuthorization} />
      <ClientContext.Provider value={client}>
        <button style={{ backgroundColor: theme }} onClick={() => setIsVisible(!isVisible)}>Войти 2</button>
        {isVisible && (
          <Modal onContainerClick={onContainerClick}>
            <SignInForm
              onCancelClick={(invisible) => setIsVisible(invisible)}
              getName={saveName}
            />
          </Modal>
        )}
      </ClientContext.Provider>
    </header>
  )
}
