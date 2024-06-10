import { Layout } from './components/layout/component'
import { SiteBar } from './components/site-bar/component'
import { ThemeContextProvider } from './components/contexsts/them/provider'
import { UserContextProvider } from './components/contexsts/user/provider'
import { useDispatch } from 'react-redux';
import { store } from './redux';
import { Restaurants } from './components/restaurants/component'
import { useEffect } from 'react';
import { getRestaurants } from './redux/entities/restaurant/thunks/get-restaurants';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

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
