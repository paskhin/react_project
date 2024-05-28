import { Tab } from "../tab/component"

export function Tabs({ restaurants, onTabClick, activeTabIndex }) {
  return (
    <div>
      {restaurants.map(({name}, index) => (
        <Tab onClick={() => onTabClick(index)} name={name} isActive={activeTabIndex === index}/>
      ))}
    </div>
  )
}
