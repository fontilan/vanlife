import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div className="mx-auto max-w-2xl px-5 py-12">
      <img className="rounded-md" src={van[0].imageUrl} />
      <button
        className={
          'mb-2 mt-4 block rounded-md px-6 py-1 font-medium text-orange-50 ' +
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
      <p className="py-2 text-2xl font-extrabold">{van[0].name}</p>
      <p className="py-2">
        <span className="text-xl font-bold">${van[0].price}</span>/day
      </p>
      <p>{van[0].description}</p>
    </div>
  ) : (
    <p className="flex h-screen w-screen items-center justify-center text-2xl font-semibold">
      Loading...
    </p>
  )
}

export default HostVanLayout
