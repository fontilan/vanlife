import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <div className="w-screen px-5 py-4">
      <nav className="flex gap-7 font-medium text-stone-600">
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
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout
