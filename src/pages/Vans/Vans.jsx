import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader() {
  return getVans()
}

function Vans() {
  // The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them.
  // https://reactrouter.com/en/main/hooks/use-search-params
  const [searchParams, setSearchParams] = useSearchParams()

  // The URLSearchParams interface defines utility methods to work with the query string of a URL. URLSearchParams.get() returns the first value associated with the given search parameter.
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const typeFilter = searchParams.get('type')
  const vans = useLoaderData()

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans

  const vansGrid = filteredVans.map((van) => (
    <div className="pb-5" key={van.id}>
      <Link
        to={van.id}
        state={{
          search: searchParams.toString(),
          type: typeFilter,
        }}
      >
        <img className="rounded-md" src={van.imageUrl} />
        <div className="flex items-center justify-between py-3 text-2xl font-semibold">
          <p className="">{van.name}</p>
          <p>${van.price}</p>
        </div>
        <p className="relative -top-4 float-right">/day</p>
        <button
          className={
            'mt-2 block rounded-md px-5 py-2 font-medium text-orange-100 ' +
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
      </Link>
    </div>
  ))

  const button = 'rounded-md px-6 py-2 hover:text-orange-100'

  // Conditional styling of the buttons, based on the value of the typeFilter. Why was this problematic? In TailwindCSS you cannot add the same property (bg-...) but with a different value (bg-green) so that it will overwrite the previous one (bg-orange). Well actualy you can, but... Tailwind applies those classes in alphabetical order (!) so bg-green won't overwrite bg-orange, but it WILL overwrite bg-dark for example.
  const simpleActive =
    typeFilter === 'simple'
      ? ' bg-orange-800 text-orange-100'
      : ' bg-orange-100'
  const luxuryActive =
    typeFilter === 'luxury' ? ' bg-dark text-orange-100' : ' bg-orange-100'
  const ruggedActive =
    typeFilter === 'rugged' ? ' bg-green-800 text-orange-100' : ' bg-orange-100'

  return (
    <div id="vans" className="px-5 pb-12">
      <h1 className="py-5 text-3xl font-bold">Explore our van options</h1>
      <nav className="flex items-center gap-7 py-5 font-medium text-neutral-600">
        <button
          className={button + simpleActive + ' hover:bg-orange-800'}
          onClick={() => setSearchParams({ type: 'simple' })}
        >
          Simple
        </button>
        <button
          className={button + luxuryActive + ' hover:bg-dark'}
          onClick={() => setSearchParams({ type: 'luxury' })}
        >
          Luxury
        </button>
        <button
          className={button + ruggedActive + ' hover:bg-green-800'}
          onClick={() => setSearchParams({ type: 'rugged' })}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="underline hover:text-neutral-800"
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
        ) : null}
      </nav>
      <div className="mx-auto grid max-w-4xl gap-12 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        {vansGrid}
      </div>
    </div>
  )
}

export default Vans
