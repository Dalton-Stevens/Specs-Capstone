const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  Pokemon: sequelize.define("pokemon", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    abilityOne: DataTypes.STRING,
    abilityTwo: DataTypes.STRING,
    abilityThree: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    atk: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    spAtk: DataTypes.INTEGER,
    spDef: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    typeOne: DataTypes.STRING,
    typeTwo: DataTypes.STRING,
  }),
};
