import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-8">
      <div className="text-lg font-extrabold">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="flex gap-4 text-stone-600 font-medium">
        <Link className="hover:text-stone-800 hover:underline" to="/about">
          About
        </Link>
        <Link className="hover:text-stone-800 hover:underline" to="/vans">
          Vans
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
