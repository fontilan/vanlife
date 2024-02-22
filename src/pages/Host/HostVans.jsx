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

  let hostVansGrid = []

  if (hostVanData != null) {
    hostVansGrid = hostVanData.map((van) => (
      <div key={van.id}>
        <Link to={van.id}>
          <img src={van.imageUrl} />
          <p>{van.name}</p>
          <p>${van.price}/day</p>
        </Link>
      </div>
    ))
  }

  return (
    <div>
      <h1>Your listed vans</h1>
      {hostVansGrid}
    </div>
  )
}

export default HostVans
