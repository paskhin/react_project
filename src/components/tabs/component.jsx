import { Tab } from "../tab/component"

export function Tabs({ restaurants, onTabClick }) {
  return (
    <div>
      {restaurants.map(({id, name}) => (
        <Tab onTabClick={onTabClick} id={id} name={name}/>
      ))}
    </div>
  )
}
