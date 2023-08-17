import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };

  return (
    <header className={`${classes.header} ${classes.flex_row}`}>
      <div className={classes.flex_row}>
        <h1 className={classes.title}>
          <NavLink style={styleActiveLink} to="/">
            PokéHome
          </NavLink>
        </h1>
      </div>
      <nav>
        <ul className={classes.main_nav}>
          <li>
            <NavLink style={styleActiveLink} to="pokedex">
              Pokédex
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="team">
              Team
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
