import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
