import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VanDetails() {
  const params = useParams()

  const [van, setVan] = useState(null)

  useEffect(() => {
    let ignore = false
    setVan(null)
    fetch(`/api/vans/${params.id}`)
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
      <img className="rounded-md" src={van.imageUrl} />
      <button
        className={
          'mt-2 block rounded-md px-6 py-1 font-medium text-orange-50 ' +
          (van.type === 'simple'
            ? 'bg-orange-800'
            : '' + van.type === 'rugged'
              ? 'bg-emerald-800'
              : '' + van.type === 'luxury'
                ? 'bg-neutral-900'
                : '')
        }
      >
        {van.type}
      </button>
      <p className="text-lg font-extrabold">{van.name}</p>
      <p>${van.price}/day</p>
      <p>{van.description}</p>
    </div>
  ) : (
    <p className="flex h-screen w-screen items-center justify-center text-2xl font-semibold">
      Loading...
    </p>
  )
}

export default VanDetails
