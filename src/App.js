import './App.css';
import Home from "./components/Home";
import GameDashboard from "./components/GameDashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gamedashboard" element={<GameDashboard />} />
          </Routes>
      </Router>
  );
}

export default App;
