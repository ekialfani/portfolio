import { Routes, Route, Navigate } from "react-router-dom";
import Certifications from "../pages/Certifications";
import Contacts from "../pages/Contacts";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Experience from "../pages/Experience";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoute;
