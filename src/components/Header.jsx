import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-8">
      <div className=" text-3xl font-black text-neutral-950">
        <NavLink to="/">#VANLIFE</NavLink>
      </div>
      <nav className="flex gap-7 font-medium text-neutral-600">
        {/* the NavLink component returns an object with a isActive property, a boolean which value depends on whether the route (to="/host" in the case below) is the current active route. We then use it to conditionally apply the styling. */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-neutral-950 underline'
              : 'hover:text-neutral-800 hover:underline'
          }
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-neutral-950 underline'
              : 'hover:text-neutral-800 hover:underline'
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-neutral-950 underline'
              : 'hover:text-neutral-800 hover:underline'
          }
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
