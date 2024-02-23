import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function HostVanLayout() {
  const params = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    let ignore = false
    setVan(null)
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setVan(data.vans)
        }
      })
    return () => {
      ignore = true
    }
  }, [params.id])

  return van ? (
    <div className="max-w-2xl py-4">
      <Link
        className="block py-4 text-stone-600 hover:text-stone-800"
        to="/host/vans"
      >
        ← <span className=" hover:underline">Back to all vans</span>
      </Link>
      <div className="flex rounded-md bg-white p-4">
        <img className="h-48 rounded-md" src={van[0].imageUrl} />
        <div className="self-center p-4">
          <button
            className={
              'block rounded-md px-6 py-1 font-medium text-orange-50 ' +
              (van[0].type === 'simple'
                ? 'bg-orange-800'
                : '' + van[0].type === 'rugged'
                  ? 'bg-emerald-800'
                  : '' + van[0].type === 'luxury'
                    ? 'bg-neutral-900'
                    : '')
            }
          >
            {van[0].type}
          </button>
          <p className="my-4 text-2xl font-extrabold">{van[0].name}</p>
          <p className="">
            <span className="text-xl font-bold">${van[0].price}</span>/day
          </p>
        </div>
      </div>
    </div>
  ) : (
    <p className="flex h-screen w-screen items-center justify-center text-2xl font-semibold">
      Loading...
    </p>
  )
}

export default HostVanLayout
