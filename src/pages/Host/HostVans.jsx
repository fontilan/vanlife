import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HostVans() {
  const [hostVanData, setHostVanData] = useState(null)

  useEffect(() => {
    let ignore = false
    setHostVanData(null)
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setHostVanData(data.vans)
        }
      })
    return () => {
      ignore = true
    }
  }, [])

  console.log('hostVanData:', hostVanData)

  let hostVansList = []

  if (hostVanData != null) {
    hostVansList = hostVanData.map((van) => (
      <div key={van.id} className="py-2">
        <Link to={van.id}>
          <div className="flex w-full items-center rounded-md bg-white px-6 py-5">
            <img className="h-20 rounded-md" src={van.imageUrl} />
            <div className="ml-4">
              <p className="text-xl font-semibold">{van.name}</p>
              <p className="text-stone-600">${van.price}/day</p>
            </div>
          </div>
        </Link>
      </div>
    ))
  }

  return (
    <div className=" py-4">
      <h1 className="py-4 text-3xl font-bold">Your listed vans</h1>
      {hostVansList}
    </div>
  )
}

export default HostVans
