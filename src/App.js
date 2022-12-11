import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar className="shadow-lg" />
      <Home />
      <About />
    </div>
  );
}

export default App;
