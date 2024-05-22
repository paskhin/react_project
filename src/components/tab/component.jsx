export function Tab({ id, name, onTabClick }) {
  const handleClick = () => {
    onTabClick(id)
  }
  return (
    <button
      onClick={handleClick}
      id={id}>
      {name}
    </button>
  )
}
