import Icons from '../../img/sprite/sprite.svg'
export function Icon({id, className}) {
  return (
    <svg className={className}>
      <use href={Icons + "#" + id}></use>
    </svg>
  )
}
