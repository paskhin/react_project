import { useState } from 'react'
import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { Tabs } from './components/tabs/component'
import { SiteBar } from './components/site-bar/component'
import { ThemeContextProvider } from './components/contexsts/them/provider'
import { UserContextProvider } from './components/contexsts/user/provider'

export function App({ restaurants }) {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const activeRestaurant = restaurants[activeRestaurantIndex]
  if (!restaurants) {
    return 'Нет данных'
  }
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <SiteBar />
          <Tabs
            restaurants={restaurants}
            onTabClick={setActiveRestaurantIndex}
            activeTabIndex={activeRestaurantIndex}
          />
          <Restaurant restaurant={activeRestaurant} />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>


  )
}


