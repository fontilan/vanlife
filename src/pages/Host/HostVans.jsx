import { useEffect, useState } from 'react'

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

  return (
    <div>
      <h1>Your listed vans</h1>
    </div>
  )
}

export default HostVans
