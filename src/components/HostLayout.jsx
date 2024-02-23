import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <div className="w-screen px-8 py-4">
      <nav className="flex gap-6 font-medium text-stone-600">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout
