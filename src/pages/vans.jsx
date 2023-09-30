import { useEffect, useState } from 'react'

function Vans() {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVansData(data))
  }, [])

  console.log(vansData)
  return <p>Vans go here</p>
}

export default Vans
