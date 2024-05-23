import { Header } from '../header/component'
import { Footer } from '../footer/component'

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
