import { createPortal } from "react-dom";


export function Modal({ onContainerClick, children }) {
  return <>
    {createPortal(<div onClick={(event) => { onContainerClick(event) }} style={{
      position: 'fixed',
      top: '0',
      left: '0',
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(242, 242, 242, 0.5)',
      zindex: '1'
    }}>
      <div id="modalForm" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '60px',
        backgroundColor: 'lightGrey',
        padding: '20px',
        border: '1px solid grey'
      }}
      >
        {children}
      </div>
    </div>, document.getElementById('modal'))}
  </>
}
