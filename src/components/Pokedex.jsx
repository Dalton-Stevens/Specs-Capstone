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

  useEffect(() => {
    console.log(displayedObject);
  }, [displayedObject]);

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
      <div>
        {displayedObject && (
          <div className={classes.poke_container}>
            <p>{displayedObject.id}</p>
            <p>{capitalize(displayedObject.name, ["-"])}</p>
            <img
              src={displayedObject.image}
              alt="image"
              className={classes.poke_img}
            />
            {displayedObject.abilityThree ? (
              <p>
                {capitalize(displayedObject.abilityOne, ["-"])}{" "}
                {capitalize(displayedObject.abilityTwo, ["-"])}{" "}
                {capitalize(displayedObject.abilityThree, ["-"])}
              </p>
            ) : displayedObject.abilityTwo ? (
              <p>
                {capitalize(displayedObject.abilityOne, ["-"])}{" "}
                {capitalize(displayedObject.abilityTwo, ["-"])}
              </p>
            ) : (
              <p>{capitalize(displayedObject.abilityOne, ["-"])}</p>
            )}
            {displayedObject.typeTwo ? (
              <p>
                {capitalize(displayedObject.typeOne, ["-"])}{" "}
                {capitalize(displayedObject.typeTwo, ["-"])}
              </p>
            ) : (
              <p>{capitalize(displayedObject.typeOne, ["-"])}</p>
            )}
            <p>
              Hp:{displayedObject.hp} Atk:{displayedObject.atk} Def:
              {displayedObject.def} SpAtk:{displayedObject.spAtk} SpDef:
              {displayedObject.spDef} Speed:{displayedObject.speed}
            </p>
            <button onClick={clickHandler}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
