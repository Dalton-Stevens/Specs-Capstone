require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { Pokemon } = require("./models/pokemon");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const { refreshData } = require("./controllers/pokedex");

app.get("/refreshData", refreshData);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  })
  .catch((err) => console.log(err));
