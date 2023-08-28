import { NavLink } from "react-router-dom";

import pokedex from "../assets/pokedex.jpeg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.pokedex_container}>
      <NavLink to="/auth">
        <img src={pokedex} alt="pokedex" className={classes.pokedex} />
      </NavLink>
    </div>
  );
};

export default Home;
