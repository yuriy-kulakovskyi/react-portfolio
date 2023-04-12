import './App.css';
import Home from './components/Home/Home';
import ParticlesComponent from './Particles/ParticlesComponent';

function App() {
  return (
    <div className="App">
      {/* Particles */}
      <ParticlesComponent />
      
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
