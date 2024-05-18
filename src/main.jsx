import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/header/component'
import { Footer } from './components/footer/component'
import { Restaurant } from './components/restaurant/component'
import { restaurants } from './constans/mock'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    {restaurants.map((restaurant) => (
      <Restaurant restaurant={restaurant} />
    ))}
    <Footer />
  </div>
)
