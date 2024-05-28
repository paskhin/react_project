export function Tab({ name, onClick, isActive }) {

  return (
    <button
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </button>
  )
}
