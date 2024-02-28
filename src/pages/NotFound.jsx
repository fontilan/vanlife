import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div id="404" className="mx-auto max-w-md self-center p-5 py-4">
      <h1 className="text-3xl font-bold">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/"
        className="mt-8 block rounded-md bg-dark p-3 text-center font-bold text-white"
      >
        Return to home
      </Link>
    </div>
  )
}

export default NotFound
