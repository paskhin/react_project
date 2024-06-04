import { createPortal } from "react-dom";
import { Button } from "../button/component";

export function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'gray',
        opacity: '0.3',
        zIndex: 1,
      }}
      onClick={onClose} />
      <div style={{
        position: 'absolute',
        top: '50vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}>
        <Button onClick={onClose}>Close</Button>
        {children}
      </div>
    </>, document.getElementById('modal'))
}
