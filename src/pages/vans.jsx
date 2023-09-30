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
      <div key={van.id}>
        <p>{van.name}</p>
      </div>
    ))
  }

  return <>{vansGrid}</>
}

export default Vans
