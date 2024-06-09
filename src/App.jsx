import { Layout } from './components/layout/component'
import { SiteBar } from './components/site-bar/component'
import { ThemeContextProvider } from './components/contexsts/them/provider'
import { UserContextProvider } from './components/contexsts/user/provider'
import { Provider } from 'react-redux';
import { store } from './redux';
import { Restaurants } from './components/restaurants/component'

export function App() {

  if (!store) {
    return 'Нет данных'
  }
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <SiteBar />
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}
