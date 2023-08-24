const axios = require("axios");
const { Sequelize } = require("sequelize");

const { Pokemon } = require("../models/pokemon");

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

module.exports = {
  refreshData: async (req, res) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1010`
      );
      for (const pokeObj of response.data.results) {
        const data = await fetchData(pokeObj.url);
        const { id, abilities, sprites, stats, types, name } = data;
        await Pokemon.create({
          id: id,
          name: name,
          sprite: sprites.front_default,
          abilityOne: abilities[0].ability.name,
          abilityTwo: abilities[1] ? abilities[1].ability.name : "",
          abilityThree: abilities[2] ? abilities[2].ability.name : "",
          hp: stats[0].base_stat,
          atk: stats[1].base_stat,
          def: stats[2].base_stat,
          spAtk: stats[3].base_stat,
          spDef: stats[4].base_stat,
          speed: stats[5].base_stat,
          typeOne: types[0].type.name,
          typeTwo: types[1] ? types[1].type.name : "",
        });
        console.log("created db entry", id);
      }
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenOne: async (req, res) => {
    try {
      const pokemon = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [1, 151],
          },
        },
      });
      res.status(200).send(pokemon);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenTwo: async (req, res) => {
    try {
      const pokemonTwo = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [152, 251],
          },
        },
      });
      res.status(200).send(pokemonTwo);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenThree: async (req, res) => {
    try {
      const pokemonThree = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [252, 386],
          },
        },
      });
      res.status(200).send(pokemonThree);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenFour: async (req, res) => {
    try {
      const pokemonFour = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [387, 493],
          },
        },
      });
      res.status(200).send(pokemonFour);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenFive: async (req, res) => {
    try {
      const pokemonFive = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [494, 649],
          },
        },
      });
      res.status(200).send(pokemonFive);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenSix: async (req, res) => {
    try {
      const pokemonSix = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [650, 721],
          },
        },
      });
      res.status(200).send(pokemonSix);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenSeven: async (req, res) => {
    try {
      const pokemonSeven = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [722, 809],
          },
        },
      });
      res.status(200).send(pokemonSeven);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenEight: async (req, res) => {
    try {
      const pokemonEight = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [810, 905],
          },
        },
      });
      res.status(200).send(pokemonEight);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  getGenNine: async (req, res) => {
    try {
      const pokemonNine = await Pokemon.findAll({
        where: {
          id: {
            [Sequelize.Op.between]: [906, 1010],
          },
        },
      });
      res.status(200).send(pokemonNine);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
