import { Header } from '../header/component'
import { Footer } from '../footer/component'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <div id='modal' style={{ position: 'relative', zIndex: '2' }} />
      <div style={{ zIndex: '1' }}>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </div>
  )
}
