const axios = require("axios");

const { Pokemon } = require("../models/pokemon");

module.exports = {
  refreshData: async (req, res) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1281`
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
};

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
