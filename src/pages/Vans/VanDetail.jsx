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
    <div className="mx-auto max-w-2xl pb-12">
      <img className="mb-8 rounded-md" src={van.imageUrl} />
      <button
        className={
          'mb-4 block rounded-md px-6 py-1 font-medium text-orange-100 ' +
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
      <p className="mb-4 text-3xl font-bold">{van.name}</p>
      <p className="mb-4">
        <span className="text-2xl font-bold">${van.price}</span>/day
      </p>
      <p className="mb-4">{van.description}</p>
      <button className="mt-8 w-full rounded-md bg-orange-400 p-3 text-center font-bold text-white shadow-sm duration-100 ease-in-out hover:translate-x-0.5 hover:translate-y-0.5">
        Rent this van
      </button>
    </div>
  ) : (
    <p className="flex h-screen w-screen items-center justify-center text-2xl font-semibold">
      Loading...
    </p>
  )
}

export default VanDetails
