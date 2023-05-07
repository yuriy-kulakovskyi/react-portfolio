import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

document.URL.at(-1) === "/" ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />}></Route>

          {/* About */}
          <Route path="about" element={<About />}></Route>

          {/* Projects */}
          <Route path="projects" element={<Projects />}></Route>

          {/* Contact */}
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
