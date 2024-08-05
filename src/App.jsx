import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/home-page";
import { ContactsPage } from "./pages/contacts/contacts";
import { RestaurantsPage } from "./pages/restaurants-page";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./components/contexsts/them/provider";
import { UserContextProvider } from "./components/contexsts/user/provider";
import { RestaurantContainer } from "./components/restaurant/container"
import { DishesContainer } from "./components/dishes/container";
import { ReviewsContainer } from "./components/reviews/container";
import { Dish } from "./pages/dish";


const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <HomePage /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'dish/:dishId', element: <Dish /> },
      {
        path: 'restaurants',
        element: <RestaurantsPage />,
        children: [
          {
            path: ':restaurantId',
            element: <RestaurantContainer />,
            children: [
              {
                index: true, element: <Navigate to='menu' replace/>
              },
              {
                path: 'menu', element: <DishesContainer />
              },
              {
                path: 'reviews',
                index: true,
                element: <ReviewsContainer />
              },
            ]
          }
        ]
      },
    ]
  }
])
export function App() {

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeContextProvider>

  )
}
