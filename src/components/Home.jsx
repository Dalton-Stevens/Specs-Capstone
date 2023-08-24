import { NavLink } from "react-router-dom";

import closed_pokedex from "../assets/closed_pokedex.jpeg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.pokedex_container}>
      <NavLink to="/auth">
        <img
          src={closed_pokedex}
          alt="closed-pokedex"
          className={classes.pokedex}
        />
      </NavLink>
    </div>
  );
};

export default Home;
