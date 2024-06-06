import { useState } from 'react'
import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { Tabs } from './components/tabs/component'
import { SiteBar } from './components/site-bar/component'
import { ThemeContextProvider } from './components/contexsts/them/provider'
import { UserContextProvider } from './components/contexsts/user/provider'
import { useSelector } from 'react-redux'

export function App() {
  const restaurantsIds = useSelector((state) => state.restaurant.ids)
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

  const handleActiveTab = (id) => {
    setActiveRestaurantId(id)
  }

  if (!activeRestaurantId) {
    return 'Нет данных'
  }
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <SiteBar />
          <Tabs
            onTabClick={handleActiveTab}
            activeRestaurantId={activeRestaurantId}
          />
          <Restaurant activeRestaurantId={activeRestaurantId} />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}
