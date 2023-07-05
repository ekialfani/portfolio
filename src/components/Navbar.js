// import profile from '../assets/images/profile.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function ShowDrawerButton(props) {
  return (
    <button
      className="text-2xl text-custom-shadow fixed z-50 top-5 left-5 md:hidden"
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
      className="md:h-full w-full fixed z-40 md:static bg-white border-b border-slate-200 py-8 md:py-0 flex flex-col items-start md:bg-custom-shadow md:items-center md:justify-center">
      <div 
        className="hidden md:inline-block bg-slate-500 w-32 h-32 2xl:w-48 2xl:h-48 rounded-full overflow-hidden border-4 border-custom-grullo">
        <img 
          className="w-full h-full"
          src="./images/profile.jpg"
          alt="profile" />
      </div>
      <ul 
        className={`bg-custom-shadow absolute w-full md:static flex flex-col items-start md:items-center md:mt-8 gap-5 md:gap-3 capitalize text-md sm:text-lg 2xl:text-2xl 2xl:gap-6 2xl:mt-12 font-medium ${animation} md:animate-none z-40`}>
        <li className="mt-10 md:mt-0">
          <NavLink 
            exact
            to="/about"
            onClick={() => setIsToggleOn(false)}>
            {({ isActive }) => (
              isActive ? <span className="text-white">about</span> : <span className="text-custom-almond hover:text-white">about</span>
            )}
            
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/trainings"
            onClick={() => setIsToggleOn(false)}>
            {({ isActive }) => (
              isActive ? <span className="text-white">trainings</span> : <span className="text-custom-almond hover:text-white">trainings</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills"
            onClick={() => setIsToggleOn(false)}>
            {({ isActive }) => (
              isActive ? <span className="text-white">skills</span> : <span className="text-custom-almond hover:text-white">skills</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects"
            onClick={() => setIsToggleOn(false)}>
            {({ isActive }) => (
              isActive ? <span className="text-white">projects</span> : <span className="text-custom-almond hover:text-white">projects</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/certifications"
            onClick={() => setIsToggleOn(false)}>
            {({ isActive }) => (
              isActive ? <span className="text-white">certifications</span> : <span className="text-custom-almond hover:text-white">certifications</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contacts"
            onClick={() => setIsToggleOn(false)}>
            {({ isActive }) => (
              isActive ? <span className="text-white">contacts</span> : <span className="text-custom-almond hover:text-white">contacts</span>
            )}
          </NavLink>
        </li>
      </ul>
      {drawerButton}
    </nav>
  );
}

export default Navbar;
