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
      <div className="px-4 pb-12" key={van.id}>
        <Link to={van.id}>
          <img className="rounded-md" src={van.imageUrl} />
          <div className="mt-2 flex justify-between">
            <p className="text-lg font-extrabold">{van.name}</p>
            <p>${van.price}/day</p>
          </div>
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
        </Link>
      </div>
    ))
  }

  return (
    <div className="mx-auto grid max-w-4xl px-5 pb-12 sm:grid-cols-2 lg:grid-cols-3">
      {vansGrid}
    </div>
  )
}

export default Vans
