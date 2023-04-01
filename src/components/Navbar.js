import profile from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <img src={profile} width="100" height="100" alt="profile" />
      </div>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/trainings">trainings</Link>
        </li>
        <li>
          <Link to="/skills">skills</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/certifications">certifications</Link>
        </li>
        <li>
          <Link to="/contacts">contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
