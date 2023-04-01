import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
