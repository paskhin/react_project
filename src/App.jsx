import { useState } from 'react'
import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { Tabs } from './components/tabs/component'
import { SiteBar } from './components/siteBar/component'
export function App({ restaurants }) {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  // const activeRestaurant = restaurants[activeRestaurantIndex]

  if (!restaurants) {
    return 'Нет данных'
  }

  return (
    <Layout>
      <SiteBar />
      <Tabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
        activeTabIndex={activeRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[0]} />
    </Layout>
  )
}


