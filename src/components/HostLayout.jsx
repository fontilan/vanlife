import { Link, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <div>
      <nav className="flex gap-4 font-medium text-stone-600">
        <Link className="hover:text-stone-800 hover:underline" to="/host">
          Dashboard
        </Link>
        <Link
          className="hover:text-stone-800 hover:underline"
          to="/host/income"
        >
          Income
        </Link>
        <Link
          className="hover:text-stone-800 hover:underline"
          to="/host/reviews"
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout
