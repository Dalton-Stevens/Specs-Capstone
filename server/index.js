require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { Pokemon } = require("./models/pokemon");
const { User } = require("./models/user");
const { Team } = require("./models/team");
const { PokemonTeam } = require("./models/pokemonTeam");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

Team.belongsToMany(Pokemon, { through: PokemonTeam });
Pokemon.belongsToMany(Team, { through: PokemonTeam });
PokemonTeam.belongsTo(Pokemon);
PokemonTeam.belongsTo(Team);
Pokemon.hasMany(PokemonTeam);
Team.hasMany(PokemonTeam);
Team.belongsTo(User);

const { register, login } = require("./controllers/auth");

const { getTeam, deletePokemon } = require("./controllers/team");

const {
  refreshData,
  getGenOne,
  getGenTwo,
  getGenThree,
  getGenFour,
  getGenFive,
  getGenSix,
  getGenSeven,
  getGenEight,
  getGenNine,
  addPokemon,
} = require("./controllers/pokedex");

const { isAuthenticated } = require("./middleware/isAuthenticated");

app.get("/refreshData", refreshData);

app.get("/getGenOne", getGenOne);
app.get("/getGenTwo", getGenTwo);
app.get("/getGenThree", getGenThree);
app.get("/getGenFour", getGenFour);
app.get("/getGenFive", getGenFive);
app.get("/getGenSix", getGenSix);
app.get("/getGenSeven", getGenSeven);
app.get("/getGenEight", getGenEight);
app.get("/getGenNine", getGenNine);
app.post("/addPokemon", isAuthenticated, addPokemon);

app.post("/register", register);
app.post("/login", login);

app.get("/getTeam", isAuthenticated, getTeam);
app.delete("/deletePokemon/:id", isAuthenticated, deletePokemon);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  })
  .catch((err) => console.log(err));
