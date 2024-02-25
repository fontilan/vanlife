import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Vans() {
  const [vansData, setVansData] = useState(null)

  useEffect(() => {
    let ignore = false
    setVansData(null)
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setVansData(data.vans)
        }
      })
    return () => {
      ignore = true
    }
  }, [])

  let vansGrid = []

  if (vansData != null) {
    vansGrid = vansData.map((van) => (
      <div className="pb-5" key={van.id}>
        <Link to={van.id}>
          <img className="rounded-md" src={van.imageUrl} />
          <div className="flex items-center justify-between py-3 text-2xl font-semibold">
            <p className="">{van.name}</p>
            <p>${van.price}</p>
          </div>
          <p className="relative -top-4 float-right">/day</p>
          <button
            className={
              'mt-2 block rounded-md px-5 py-2 font-medium text-orange-100 ' +
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
        </Link>
      </div>
    ))
  }

  return (
    <div id="vans" className="px-5 pb-12">
      <h1 className="py-5 text-3xl font-bold">Explore our van options</h1>
      <div className="mx-auto grid max-w-4xl gap-12 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        {vansGrid}
      </div>
    </div>
  )
}

export default Vans
