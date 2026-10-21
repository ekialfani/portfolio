import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 px-[20px] md:px-[30px]">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
