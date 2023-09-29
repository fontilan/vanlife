import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="w-full bg-[url('https://images.unsplash.com/photo-1603881669207-82be1849d585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center p-4">
      <div className="mx-auto max-w-2xl py-12">
        <h1 className="text-4xl font-extrabold text-neutral-100 drop-shadow-sm">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mt-8 text-neutral-100 drop-shadow-lg">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          className="mt-8 block rounded-md bg-orange-400 p-3 text-center font-semibold text-neutral-100 shadow-sm"
          to="/vans"
        >
          Find your van
        </Link>
      </div>
    </div>
  )
}

export default Home
