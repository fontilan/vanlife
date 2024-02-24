import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {
  const [van] = useOutletContext()
  return (
    <div className="py-4">
      <p>
        <span className="text-2xl">${van.price}</span>/day
      </p>
    </div>
  )
}

export default HostVanPricing
