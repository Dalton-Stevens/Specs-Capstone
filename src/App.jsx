import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import Team from "./components/Team";

function App() {
  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then((res) => {
        // console.log(res.data.results);
        res.data.results.map((item) => {
          console.log(item);
          axios.get(item.url).then((res) => {
            console.log(res.data);
          });
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemon();
  }, []);

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
