import { Header } from '../header/component'
import { Footer } from '../footer/component'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <div id='modal' style={{ position: 'relative', zIndex: '2' }} />
      <div className='wrapper' style={{ zIndex: '1' }}>
        <div className='main'>
        <Header />
        <Outlet/>
        </div>
        <Footer />
      </div>
    </div>
  )
}
