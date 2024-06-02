import { Header } from '../header/component'
import { Footer } from '../footer/component'

export function Layout({ children, onChange, isAuthorization }) {
  return (
    <div>
      <div id='modal' style={{position: 'relativ', zIndex: '2'}}></div>
      <Header

        onChange={onChange}
        isAuthorization={isAuthorization}
      />
      {children}
      <Footer />
    </div>
  )
}
