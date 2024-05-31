export function Rating({onRatingClick}) {
  const grades = ['1', '2', '3', '4', '5']
  return (
    <div>
      <span>Raiting</span>
      {grades.map((grad) => (
        <button onClick={() => onRatingClick(grad)}>{grad}</button>
      ))}
    </div>
  )
}
