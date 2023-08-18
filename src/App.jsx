import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import Team from "./components/Team";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
