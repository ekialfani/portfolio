import profile from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ShowDrawerButton(props) {
  return (
    <button
      className="text-2xl text-white fixed z-50 top-5 left-5 md:hidden"
      onClick={props.onClick}>
      <i class="bi bi-list"></i>
    </button>
  );
}

function HideDrawerButton(props) {
  return (
    <button
      className="text-2xl text-white fixed z-50 top-5 left-5 md:hidden" 
      onClick={props.onClick}>
      <i class="bi bi-x"></i>
    </button>
  );
}

function Navbar() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  let drawerButton;
  let animation;

  if (isToggleOn) {
    drawerButton = <HideDrawerButton onClick={() => setIsToggleOn(false)} />
    animation = 'animate-drawer-show';
  } else {
    drawerButton = <ShowDrawerButton onClick={() => setIsToggleOn(true)} />
    animation = 'animate-drawer-hide';
  }

  return (
    <nav 
      className="md:h-full w-full fixed z-40 md:static bg-custom-shadow py-8 md:py-0 flex flex-col items-start md:items-center md:justify-center">
      <div 
        className="hidden md:inline-block bg-slate-500 w-32 h-32 2xl:w-52 2xl:h-52 rounded-full overflow-hidden border-4 border-custom-grullo">
        <img 
          className="w-full h-full"
          src={profile}
          alt="profile" />
      </div>
      <ul 
        className={`bg-custom-shadow absolute w-full md:static flex flex-col items-start md:items-center mt-8 gap-3 capitalize text-md sm:text-lg 2xl:text-2xl 2xl:gap-6 2xl:mt-12 font-medium ${animation} md:animate-none z-40`}>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link 
            to="/about" 
            onClick={() => setIsToggleOn(false)}>
            about
          </Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link 
            to="/trainings"
            onClick={() => setIsToggleOn(false)}>
            trainings
          </Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link 
            to="/skills"
            onClick={() => setIsToggleOn(false)}>
            skills
          </Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link 
            to="/projects"
            onClick={() => setIsToggleOn(false)}>
            projects
          </Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link 
            to="/certifications"
            onClick={() => setIsToggleOn(false)}>
            certifications
          </Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link 
            to="/contacts"
            onClick={() => setIsToggleOn(false)}>
            contacts
          </Link>
        </li>
      </ul>
      {drawerButton}
    </nav>
  );
}

export default Navbar;
