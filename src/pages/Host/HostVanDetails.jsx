import { useState, useEffect } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

function HostVanDetails() {
  const params = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    let ignore = false
    setVan(null)
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setVan(data.vans[0])
        }
      })
    return () => {
      ignore = true
    }
  }, [params.id])

  return van ? (
    <div className="max-w-2xl py-4">
      <Link
        className="block py-4 text-neutral-600 hover:text-neutral-800"
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
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-neutral-950 underline'
                : 'hover:text-neutral-800 hover:underline'
            }
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-neutral-950 underline'
                : 'hover:text-neutral-800 hover:underline'
            }
            to="photos"
          >
            Photos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-neutral-950 underline'
                : 'hover:text-neutral-800 hover:underline'
            }
            to="pricing"
          >
            Pricing
          </NavLink>
        </nav>
        <Outlet context={[van]} />
      </div>
    </div>
  ) : (
    <p className="flex h-screen w-screen items-center justify-center text-2xl font-semibold">
      Loading...
    </p>
  )
}

export default HostVanDetails
