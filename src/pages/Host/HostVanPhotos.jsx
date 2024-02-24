import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const [van] = useOutletContext()
  return (
    <div className="py-4">
      <img className="rounded-md" src={van.imageUrl} />
    </div>
  )
}

export default HostVanPhotos
