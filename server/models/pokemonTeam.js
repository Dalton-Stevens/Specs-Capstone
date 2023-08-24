const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  PokemonTeam: sequelize.define("pokemonTeam", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  }),
};
