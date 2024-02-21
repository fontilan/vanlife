import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <div>
      <nav className="flex gap-4 font-medium text-stone-600">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/host"
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
