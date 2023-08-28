import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SelectBar from "./SelectBar";

import AuthContext from "../store/authContext";

import classes from "./Pokedex.module.css";

const capitalize = (str, separators) => {
  separators = separators || [" "];
  let regex = new RegExp("(^|[" + separators.join("") + "])(\\w)", "g");
  return str.toLowerCase().replace(regex, function (x) {
    return x.toUpperCase();
  });
};

const Pokedex = () => {
  const { state } = useContext(AuthContext);
  const [userTeam, setUserTeam] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");
  const [selectedOption8, setSelectedOption8] = useState("");
  const [selectedOption9, setSelectedOption9] = useState("");

  const [displayedObject, setDisplayedObject] = useState(null);
  const [genOne, setGenOne] = useState([]);
  const [genTwo, setGenTwo] = useState([]);
  const [genThree, setGenThree] = useState([]);
  const [genFour, setGenFour] = useState([]);
  const [genFive, setGenFive] = useState([]);
  const [genSix, setGenSix] = useState([]);
  const [genSeven, setGenSeven] = useState([]);
  const [genEight, setGenEight] = useState([]);
  const [genNine, setGenNine] = useState([]);

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

  // useEffect(() => {
  //   console.log(displayedObject);
  //   console.log(userTeam);
  // }, [displayedObject, userTeam]);

  const clickHandler = () => {
    axios
      .post(
        "http://localhost:4004/addPokemon",
        {
          teamId: userTeam.id,
          pokemonId: displayedObject.id,
        },
        {
          headers: {
            authorization: state.token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    async function fetchGenOne() {
      try {
        const response = await fetch("http://localhost:4004/getGenOne");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenOne(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching gen one data:", error);
      }
    }

    fetchGenOne();
  }, []);

  useEffect(() => {
    async function fetchGenTwo() {
      try {
        const response = await fetch("http://localhost:4004/getGenTwo");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenTwo(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching gen two data:", error);
      }
    }

    fetchGenTwo();
  }, []);

  useEffect(() => {
    async function fetchGenThree() {
      try {
        const response = await fetch("http://localhost:4004/getGenThree");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenThree(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching gen three data:", error);
      }
    }

    fetchGenThree();
  }, []);

  useEffect(() => {
    async function fetchGenFour() {
      try {
        const response = await fetch("http://localhost:4004/getGenFour");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenFour(data);
      } catch (error) {
        console.error("Error fetching gen four data:", error);
      }
    }

    fetchGenFour();
  }, []);

  useEffect(() => {
    async function fetchGenFive() {
      try {
        const response = await fetch("http://localhost:4004/getGenFive");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenFive(data);
      } catch (error) {
        console.error("Error fetching gen five data:", error);
      }
    }

    fetchGenFive();
  }, []);

  useEffect(() => {
    async function fetchGenSix() {
      try {
        const response = await fetch("http://localhost:4004/getGenSix");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenSix(data);
      } catch (error) {
        console.error("Error fetching gen six data:", error);
      }
    }

    fetchGenSix();
  }, []);

  useEffect(() => {
    async function fetchGenSeven() {
      try {
        const response = await fetch("http://localhost:4004/getGenSeven");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenSeven(data);
      } catch (error) {
        console.error("Error fetching gen seven data:", error);
      }
    }

    fetchGenSeven();
  }, []);

  useEffect(() => {
    async function fetchGenEight() {
      try {
        const response = await fetch("http://localhost:4004/getGenEight");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenEight(data);
      } catch (error) {
        console.error("Error fetching gen eight data:", error);
      }
    }

    fetchGenEight();
  }, []);

  useEffect(() => {
    async function fetchGenNine() {
      try {
        const response = await fetch("http://localhost:4004/getGenNine");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenNine(data);
      } catch (error) {
        console.error("Error fetching gen nine data:", error);
      }
    }

    fetchGenNine();
  }, []);

  return (
    <div className={classes.pokedex_container}>
      <div className={classes.select_container}>
        <div>
          <SelectBar
            options={genOne}
            onChange={(item) => setSelectedOption1(item)}
            selectedKey={selectedOption1}
            placeholder={"Gen One"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genTwo}
            onChange={(item) => setSelectedOption2(item)}
            selectedKey={selectedOption2}
            placeholder={"Gen Two"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genThree}
            onChange={(item) => setSelectedOption3(item)}
            selectedKey={selectedOption3}
            placeholder={"Gen Three"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genFour}
            onChange={(item) => setSelectedOption4(item)}
            selectedKey={selectedOption4}
            placeholder={"Gen Four"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genFive}
            onChange={(item) => setSelectedOption5(item)}
            selectedKey={selectedOption5}
            placeholder={"Gen Five"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genSix}
            onChange={(item) => setSelectedOption6(item)}
            selectedKey={selectedOption6}
            placeholder={"Gen Six"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genSeven}
            onChange={(item) => setSelectedOption7(item)}
            selectedKey={selectedOption7}
            placeholder={"Gen Seven"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genEight}
            onChange={(item) => setSelectedOption8(item)}
            selectedKey={selectedOption8}
            placeholder={"Gen Eight"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
        <div>
          <SelectBar
            options={genNine}
            onChange={(item) => setSelectedOption9(item)}
            selectedKey={selectedOption9}
            placeholder={"Gen Nine"}
            setDisplayedObject={setDisplayedObject}
          />
        </div>
      </div>
      <div className={classes.main_poke_container}>
        {displayedObject && (
          <div className={classes.poke_container}>
            <div className={classes.left_container}>
              <h1 className={classes.poke_id}>{displayedObject.id}</h1>
              <h1 className={classes.poke_name}>
                {capitalize(displayedObject.name, ["-"])}
              </h1>
              <img
                src={displayedObject.image}
                alt="image"
                className={classes.poke_img}
              />
            </div>
            <div className={classes.right_container}>
              {displayedObject.typeTwo ? (
                <ul>
                  <h1 className={classes.title}>Types</h1>
                  <div className={classes.twoType_container}>
                    <li
                      className={
                        classes[`type${capitalize(displayedObject.typeOne)}`]
                      }
                    >
                      {capitalize(displayedObject.typeOne, ["-"])}{" "}
                    </li>
                    <li
                      className={
                        classes[`type${capitalize(displayedObject.typeTwo)}`]
                      }
                    >
                      {capitalize(displayedObject.typeTwo, ["-"])}
                    </li>
                  </div>
                </ul>
              ) : (
                <ul>
                  <h1 className={classes.title}>Type</h1>
                  <div className={classes.oneType_container}>
                    <li
                      className={
                        classes[`type${capitalize(displayedObject.typeOne)}`]
                      }
                    >
                      {capitalize(displayedObject.typeOne, ["-"])}
                    </li>
                  </div>
                </ul>
              )}
              {displayedObject.abilityThree ? (
                <ul>
                  <h1 className={classes.title}>Abilities</h1>
                  <div className={classes.threeAbility_container}>
                    <li>{capitalize(displayedObject.abilityOne, ["-"])}</li>
                    <li>{capitalize(displayedObject.abilityTwo, ["-"])}</li>
                    <li>{capitalize(displayedObject.abilityThree, ["-"])}</li>
                  </div>
                </ul>
              ) : displayedObject.abilityTwo &&
                displayedObject.abilityTwo !== displayedObject.abilityOne ? (
                <ul>
                  <h1 className={classes.title}>Abilities</h1>
                  <div className={classes.twoAbility_container}>
                    <li>{capitalize(displayedObject.abilityOne, ["-"])}</li>
                    <li>{capitalize(displayedObject.abilityTwo, ["-"])}</li>
                  </div>
                </ul>
              ) : (
                <ul>
                  <h1 className={classes.title}>Ability</h1>
                  <div className={classes.oneAbility_container}>
                    <li>{capitalize(displayedObject.abilityOne, ["-"])}</li>
                  </div>
                </ul>
              )}
              <ul>
                <h1 className={classes.title}>Base Stats</h1>
                <div className={classes.stats_container}>
                  <li>Hp:{displayedObject.hp}</li>
                  <li>Atk:{displayedObject.atk}</li>
                  <li>Def:{displayedObject.def}</li>
                  <li>SpAtk:{displayedObject.spAtk}</li>
                  <li>SpDef:{displayedObject.spDef}</li>
                  <li>Speed:{displayedObject.speed}</li>
                </div>
              </ul>
            </div>
            {userTeam.pokemons.length < 6 ? (
              <div className={classes.btn_container}>
                <button className={classes.add_btn} onClick={clickHandler}>
                  Add
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
