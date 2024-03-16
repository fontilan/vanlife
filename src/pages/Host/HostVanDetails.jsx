import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}

function HostVanDetails() {
  const van = useLoaderData()

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'font-bold text-neutral-950 underline'
      : 'hover:text-neutral-800 hover:underline'

  return (
    <div id="host-van-details" className="max-w-2xl pb-12">
      <Link
        className="block py-5 text-neutral-600 hover:text-neutral-800"
        to=".."
        relative="path"
      >
        ← <span className="hover:underline">Back to all vans</span>
      </Link>
      <div className="rounded-md bg-white p-4">
        <div className="flex">
          <img className="h-48 rounded-md" src={van.imageUrl} />
          <div className="self-center p-4">
            <button
              className={
                'block rounded-md px-6 py-1 font-medium text-orange-100 ' +
                (van.type === 'simple'
                  ? 'bg-orange-800'
                  : '' + van.type === 'rugged'
                    ? 'bg-green-800'
                    : '' + van.type === 'luxury'
                      ? 'bg-dark'
                      : '')
              }
            >
              {van.type}
            </button>
            <p className="my-4 text-2xl font-extrabold">{van.name}</p>
            <p className="">
              <span className="text-xl font-bold">${van.price}</span>/day
            </p>
          </div>
        </div>
        <nav className="flex gap-7 py-4 font-medium text-neutral-600">
          <NavLink className={navLinkStyle} to="." end>
            Details
          </NavLink>
          <NavLink className={navLinkStyle} to="photos">
            Photos
          </NavLink>
          <NavLink className={navLinkStyle} to="pricing">
            Pricing
          </NavLink>
        </nav>
        <Outlet context={[van]} />
      </div>
    </div>
  )
}

export default HostVanDetails
