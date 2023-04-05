import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Certifications from '../pages/Certifications';
import Contacts from '../pages/Contacts';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Trainings from '../pages/Trainings';
import NotFound from '../pages/NotFound';

function AppRoute() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Navigate to="/about" replace={ true } />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoute;
