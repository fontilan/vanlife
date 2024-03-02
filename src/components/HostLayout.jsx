import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'font-bold text-neutral-950 underline'
      : 'hover:text-neutral-800 hover:underline'

  return (
    <div className="w-screen px-5 pb-12" id="host-content">
      <nav className="flex gap-7 py-5 font-medium text-neutral-600">
        <NavLink className={navLinkStyle} to="/host" end>
          Dashboard
        </NavLink>
        <NavLink className={navLinkStyle} to="income">
          Income
        </NavLink>
        <NavLink className={navLinkStyle} to="vans">
          Vans
        </NavLink>
        <NavLink className={navLinkStyle} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout
