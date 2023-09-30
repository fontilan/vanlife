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
          setVansData(data)
        }
      })
    return () => {
      ignore = true
    }
  }, [])

  console.log(vansData)
  return <p>Vans go here</p>
}

export default Vans
