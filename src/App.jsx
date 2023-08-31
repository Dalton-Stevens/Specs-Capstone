import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Pokedex from "./components/Pokedex";
import Team from "./components/Team";

import AuthContext from "./store/authContext";

function App() {
  const { state } = useContext(AuthContext);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={!state.token ? <Auth /> : <Navigate to="/pokedex" />}
        />
        <Route
          path="/pokedex"
          element={state.token ? <Pokedex /> : <Navigate to="/auth" />}
        />
        <Route
          path="/team"
          element={state.token ? <Team /> : <Navigate to="/auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
