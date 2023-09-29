import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="mx-auto">
      <div className="max-w-2xl px-4 py-12">
        <img
          className="h-60 w-full object-cover rounded-md"
          src="https://images.unsplash.com/flagged/photo-1557772350-e6061e459264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
        <br />
        <h1 className="font-bold text-3xl">
          Don&apos;t squeeze in a sedan when you could relax in a van.
        </h1>
        <br />
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
        </p>
        <p>(Hitch costs extra 😉)</p>
        <br />
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <br />
        <div className="bg-orange-200 p-6 rounded-md">
          <p className="font-bold text-lg">Your destination is waiting.</p>
          <p className="font-bold text-lg">Your van is ready.</p>
          <Link
            className="bg-neutral-900 mt-4 text-neutral-50 font-semibold py-2 px-3 inline-block rounded-md"
            to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
