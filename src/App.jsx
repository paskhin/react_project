import { useState } from 'react'
import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { Tabs } from './components/tabs/component'
import { SiteBar } from './components/site-bar/component'
import { ThemeContext } from './components/contexsts/theme'
import { AuthorisationContext } from './components/contexsts/authorization'
import { user } from './constans/mock'


export function App({ restaurants }) {
  const [theme, setTheme] = useState(null);
  const [authorisation, setAuthorization] = useState('Войти')
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const activeRestaurant = restaurants[activeRestaurantIndex]
  if (!restaurants) {
    return 'Нет данных'
  }
  return (
    <ThemeContext.Provider value={theme}>
      <AuthorisationContext.Provider value={authorisation}>
        <Layout
          onChange={() => { theme === 'lightBlue' ? setTheme(null) : setTheme('lightBlue') }}
          isAuthorization={() => { authorisation === 'Войти' ? setAuthorization(user) : setAuthorization('Войти') }}
        >
          <SiteBar />
          <Tabs
            restaurants={restaurants}
            onTabClick={setActiveRestaurantIndex}
            activeTabIndex={activeRestaurantIndex}
          />
          <Restaurant restaurant={activeRestaurant} />
        </Layout>
      </AuthorisationContext.Provider>
    </ThemeContext.Provider>
  )
}


