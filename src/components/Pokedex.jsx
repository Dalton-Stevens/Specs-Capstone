import open_pokedex from "../assets/open_pokedex.png";
import classes from "./Pokedex.module.css";

const Pokedex = () => {
  return (
    <div className={classes.pokedex_container}>
      <img src={open_pokedex} alt="open-pokedex" className={classes.pokedex} />
    </div>
  );
};

export default Pokedex;
