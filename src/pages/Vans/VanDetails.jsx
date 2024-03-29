import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader({ params }) {
  return getVans(params.id)
}

function VanDetails() {
  const location = useLocation()
  const van = useLoaderData()

  // Using optional chaining here. If location.state exists then check the type. If state does not exist (is null) then return "all".
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const type = location.state?.type || 'all'

  return (
    <div id="van-details" className="mx-auto max-w-2xl px-5 pb-12">
      <Link
        className="block py-5 text-neutral-600 hover:text-neutral-800"
        to={'..?' + location.state.search}
        relative="path"
      >
        ← <span className="hover:underline">Back to {type} vans</span>
      </Link>
      <img className="mb-12 mt-5 rounded-md" src={van.imageUrl} />
      <button
        className={
          'mb-4 block rounded-md px-6 py-1 font-medium text-orange-100 ' +
          (van.type === 'simple'
            ? 'bg-orange-800'
            : '' + van.type === 'rugged'
              ? 'bg-green-800'
              : '' + van.type === 'luxury'
                ? 'bg-dark'
                : '')
        }
      >
        {van.type}
      </button>
      <p className="mb-4 text-3xl font-bold">{van.name}</p>
      <p className="mb-4">
        <span className="text-2xl font-bold">${van.price}</span>/day
      </p>
      <p className="mb-4">{van.description}</p>
      <button className="mt-8 w-full rounded-md bg-orange-400 p-3 text-center font-bold text-white shadow-sm duration-100 ease-in-out hover:translate-x-0.5 hover:translate-y-0.5">
        Rent this van
      </button>
    </div>
  )
}

export default VanDetails
