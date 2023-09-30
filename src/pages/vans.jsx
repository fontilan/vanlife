import { useEffect, useState } from 'react'

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
      <div className="p-4" key={van.id}>
        <img className="rounded-md" src={van.imageUrl} />
        <div className="mt-2 flex justify-between">
          <p className="text-lg font-extrabold">{van.name}</p>
          <p>${van.price}/day</p>
        </div>
        <button>{van.type}</button>
      </div>
    ))
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {vansGrid}
    </div>
  )
}

export default Vans
