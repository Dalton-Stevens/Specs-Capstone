const { User } = require("../models/user");
const { Team } = require("../models/team");
const { PokemonTeam } = require("../models/pokemonTeam");
const { Pokemon } = require("../models/pokemon");

module.exports = {
  getTeam: async (req, res) => {
    try {
      const { userId } = req.body;
      const team = await Team.findOne({
        include: [Pokemon, User],
        where: { userId: userId },
      });
      if (!team) {
        const newTeam = await Team.create({ userId });
        res.status(200).send(newTeam);
      } else {
        res.status(200).send(team);
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
  deletePokemon: async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      await PokemonTeam.destroy({ where: { id: +id } });
      const team = await Team.findOne({
        include: [Pokemon, User],
        where: { userId: userId },
      });
      res.status(200).send(team);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
