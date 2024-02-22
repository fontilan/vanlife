import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// "An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. https://reactrouter.com/en/main/components/outlet

function Layout() {
  return (
    <main className="flex min-h-screen  flex-col bg-orange-50">
      <Header />
      <div className="flex flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout
