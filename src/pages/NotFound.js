import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2
      className="capitalize text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mt-24 mb-4 md:mt-10 md:mb-5 2xl:mb-8 text-red-500">page not found!</h2>
      <Link 
        to="/"
        className="bg-custom-shadow px-5 py-2 capitalize text-white text-xs md:text-sm rounded-md font-semibold inline-block mt-5 hover:bg-custom-grullo active:bg-custom-shadow">
        go home
      </Link>
    </div>
  );
}

export default NotFound;
