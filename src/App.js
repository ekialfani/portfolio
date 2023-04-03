import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="grid md:grid-cols-[minmax(250px,22%)_1fr] h-screen overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
