import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Trainings from './pages/Trainings';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Trainings />
      <Skills />
    </div>
  );
}

export default App;
