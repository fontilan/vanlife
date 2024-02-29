import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'

export function loader() {
  return getHostVans()
}

function HostVans() {
  const hostVanData = useLoaderData()

  const hostVansList = hostVanData.map((van) => (
    <div key={van.id} className="py-2">
      <Link to={van.id}>
        <div className="flex w-full items-center rounded-md bg-white px-6 py-5">
          <img className="h-28 rounded-sm" src={van.imageUrl} />
          <div className="ml-4">
            <p className="text-xl font-semibold">{van.name}</p>
            <p className="text-neutral-600">${van.price}/day</p>
          </div>
        </div>
      </Link>
    </div>
  ))

  return (
    <div className="py-4">
      <h1 className="py-4 text-3xl font-bold">Your listed vans</h1>
      {hostVansList}
    </div>
  )
}

export default HostVans
