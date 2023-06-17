import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="bg-slate-50 grid md:grid-cols-[minmax(200px,20%)_1fr] h-screen overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
