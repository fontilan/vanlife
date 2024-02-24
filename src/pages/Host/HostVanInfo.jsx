import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  const [van] = useOutletContext()
  return (
    <div className="py-4 text-sm">
      <p className="mb-3">
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p className="mb-3">
        <span className="font-bold">Category: </span>
        {van.type}
      </p>
      <p className="mb-3">
        <span className="font-bold">Description: </span>
        {van.description}
      </p>
      <p className="mb-3">
        <span className="font-bold">Visibility: </span>
        Public
      </p>
    </div>
  )
}

export default HostVanInfo
