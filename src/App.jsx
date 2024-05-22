import { useState } from 'react'
import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { Tabs } from './components/tabs/component'
export function App({ restaurants }) {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  const handleTabClick = (id) => {
    if (id === restaurant.id) {
      return
    } else {
      let newRestaurant = restaurants.find((item) => item.id === id);
      setRestaurant(newRestaurant)
    }
  }

  if (!restaurants) {
    return 'Нет данных'
  }

  return (
    <Layout>
      <Tabs
        restaurants={restaurants}
        onTabClick={handleTabClick}
      />
      <Restaurant restaurant={restaurant} />
    </Layout>
  )
}


