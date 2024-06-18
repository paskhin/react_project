import { Layout } from './components/layout/component'
import { SiteBar } from './components/site-bar/component'
import { ThemeContextProvider } from './components/contexsts/them/provider'
import { UserContextProvider } from './components/contexsts/user/provider'
import { store } from './redux';
import { Restaurants } from './components/restaurants/component'

export function App() {

  if (!store) {
    return 'Нет данных'
  }
  return (
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <SiteBar />
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
  )
}
