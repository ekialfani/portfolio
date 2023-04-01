import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Trainings from './pages/Trainings';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Trainings />
      <Skills />
      <Projects />
      <Certifications />
      <Contacts />
    </div>
  );
}

export default App;
