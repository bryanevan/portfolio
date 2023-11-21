import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Test from "./components/Test";
import Scroll from "./components/Scroll";
import withHOC from "./components/withHOC";

const App = () => {
  return (
    <div className="App">
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
export default withHOC(App);
