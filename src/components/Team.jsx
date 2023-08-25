import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

import AuthContext from "../store/authContext";
import classes from "./Team.module.css";

const Team = () => {
  const [userTeam, setUserTeam] = useState(null);
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateClick = () => {
    axios
      .post(
        "http://localhost:4004/createTeam",
        {},
        {
          headers: {
            authorization: state.token,
          },
        }
      )
      .then(() => {
        navigate("/pokedex");
      })
      .catch((err) => console.error(err));
  };

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

  useEffect(() => {
    console.log(userTeam);
  }, [userTeam]);

  useEffect(() => {
    if (userTeam?.pokemons.length === 0) {
      navigate("/pokedex");
    }
  }, [userTeam?.pokemons]);

  return (
    <div className={classes.page_container}>
      {!userTeam && (
        <button className={classes.team_btn} onClick={handleCreateClick}>
          Create Team
        </button>
      )}
      {userTeam && (
        <div className={classes.team_container}>
          {userTeam.pokemons.map((poke) => (
            <div key={poke.id} className={classes.img_container}>
              <img src={poke.image} className={classes.poke_image} />
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
