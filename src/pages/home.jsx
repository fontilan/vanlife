import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4 w-full bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1603881669207-82be1849d585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="font-extrabold text-neutral-100 text-4xl drop-shadow-sm">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-neutral-100 drop-shadow-lg mt-8">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link
          className="mt-8 block rounded-md text-neutral-100 font-semibold text-center p-3 bg-orange-400 shadow-sm"
          to="/vans">
          Find your van
        </Link>
      </div>
    </div>
  );
}

export default Home;
