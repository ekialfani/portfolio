import profile from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav 
      className="h-full bg-custom-shadow flex flex-col items-center justify-center">
      <div 
        className="bg-slate-500 w-32 h-32 rounded-full overflow-hidden border-4 border-custom-grullo">
        <img 
          className="w-full h-full"
          src={profile}
          alt="profile" />
      </div>
      <ul 
        className="flex flex-col items-center mt-8 gap-2 capitalize text-lg font-medium">
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link to="/about">about</Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link to="/trainings">trainings</Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link to="/skills">skills</Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link to="/projects">projects</Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link to="/certifications">certifications</Link>
        </li>
        <li 
          className="text-custom-almond hover:text-white active:text-custom-almond">
          <Link to="/contacts">contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
