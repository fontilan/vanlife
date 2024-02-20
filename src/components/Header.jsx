import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-between px-4 py-8">
      <div className=" text-lg font-extrabold">
        <Link to="/">#VANLIFE</Link>
      </div>
      <nav className="flex gap-4 font-medium text-stone-600">
        <Link className="hover:text-stone-800 hover:underline" to="/host">
          Host
        </Link>
        <Link className="hover:text-stone-800 hover:underline" to="/about">
          About
        </Link>
        <Link className="hover:text-stone-800 hover:underline" to="/vans">
          Vans
        </Link>
      </nav>
    </header>
  )
}

export default Header
