export function CartIndicator({ count, onClearClick }) {
  return <div>
    <span>
      Cart: {count}
    </span>
    {count > 0 && <button onClick={onClearClick}>Clear</button>}

  </div>
}
