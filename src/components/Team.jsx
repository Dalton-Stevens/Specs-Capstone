import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

import AuthContext from "../store/authContext";
import classes from "./Team.module.css";

const capitalize = (str, separators) => {
  separators = separators || [" "];
  let regex = new RegExp("(^|[" + separators.join("") + "])(\\w)", "g");
  return str.toLowerCase().replace(regex, function (x) {
    return x.toUpperCase();
  });
};

const Team = () => {
  const [userTeam, setUserTeam] = useState(null);
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4004/getTeam", {
        headers: {
          authorization: state.token,
        },
      })
      .then((res) => {
        setUserTeam(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deletePokemon = (id) => {
    axios
      .delete(`http://localhost:4004/deletePokemon/${id}`, {
        headers: {
          authorization: state.token,
        },
      })
      .then((res) => {
        setUserTeam(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   console.log(userTeam);
  // }, [userTeam]);

  useEffect(() => {
    if (userTeam?.pokemons.length === 0) {
      navigate("/pokedex");
    }
  }, [userTeam?.pokemons]);

  return (
    <div className={classes.page_container}>
      {userTeam && (
        <div className={classes.team_container}>
          <h1 className={classes.user_title}>
            {capitalize(userTeam.user.username, ["-"])}'s Team
          </h1>
          {userTeam.pokemons.map((poke) => (
            <div key={poke.id} className={classes.poke_container}>
              <h2 className={classes.poke_name}>
                {capitalize(poke.name, ["-"])}
              </h2>
              <img src={poke.image} className={classes.poke_image} />
              {poke.typeTwo ? (
                <ul>
                  <div className={classes.twoType_container}>
                    <li className={classes[`type${capitalize(poke.typeOne)}`]}>
                      {capitalize(poke.typeOne, ["-"])}{" "}
                    </li>
                    <li className={classes[`type${capitalize(poke.typeTwo)}`]}>
                      {capitalize(poke.typeTwo, ["-"])}
                    </li>
                  </div>
                </ul>
              ) : (
                <ul>
                  <div className={classes.oneType_container}>
                    <li className={classes[`type${capitalize(poke.typeOne)}`]}>
                      {capitalize(poke.typeOne, ["-"])}
                    </li>
                  </div>
                </ul>
              )}
              <TrashIcon
                className={classes.delete_btn}
                onClick={() => deletePokemon(poke.pokemonTeam.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
