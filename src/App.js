import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    // <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">
    <>
      <Navbar />
      <Content />
    </>
    // </div>
  );
}

export default App;
