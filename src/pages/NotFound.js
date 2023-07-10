/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", {replace: true})
    }, 5000);
  }, []);

  return (
    <div className="h-screen w-screen fixed top-0 right-0 bottom-0 left-0 z-50 bg-white flex flex-col items-center justify-center px-10">
      <img 
        className="w-3/4 md:max-w-sm"
        src="/images/404-not-found.jpg"
        alt="not found page"
      />
      <div className="text-center">
        <h2
        className="capitalize text-2xl md:text-3xl font-semibold">
          oops!
        </h2>
        <p className="text-slate-500 mt-3 text-sm md:text-base">
          Sorry, the page you are trying to access is not available.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
