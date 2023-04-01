import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Trainings from './pages/Trainings';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Trainings />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
