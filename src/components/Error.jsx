import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  return (
    <div className="py-4">
      <h1 aria-live="assertive" className="py-4 text-3xl font-bold">
        Error: {error.message}
      </h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  )
}

export default Error
