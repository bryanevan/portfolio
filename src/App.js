import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Scroll from "./components/Scroll";
import Case from "./components/Case";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/case" element={<Case />} />
      </Routes>
      <Navbar />
      <Scroll />
      <Home />
      <Projects />
      <About />
      <Contact />
    </Router>
  );
}
export default App;
