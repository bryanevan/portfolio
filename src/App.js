import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Test from "./components/Test";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <div>
      <Navbar />
      <Scroll />
      <Home />
      <Projects />
      {/* <Test /> */}
      <About />
      <Contact />
    </div>
  );
};
export default App;
