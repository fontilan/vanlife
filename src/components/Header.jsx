import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-between px-8 py-8">
      <div className=" text-3xl font-black">
        <NavLink to="/">#VANLIFE</NavLink>
      </div>
      <nav className="flex gap-6 font-medium text-stone-600">
        {/* the NavLink component returns an object with a isActive property, a boolean which value depends on whether the route (to="/host" in the case below) is the current active route. We then use it to conditionally apply the styling. */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-stone-800 underline'
              : 'hover:text-stone-700 hover:underline'
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
