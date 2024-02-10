import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

// "An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. https://reactrouter.com/en/main/components/outlet

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
