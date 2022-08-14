const initModels = () => {
  const { User } = require("./user.model");
  const { Game } = require("./game.model");
  const { Review } = require("./reviews.model");
  const { Console } = require("./console.model");

  User.hasMany(Review, { foreignKey: "userId" });
  Review.belongsTo(User);

  Game.hasMany(Review, { foreignKey: "gameId" });
  Review.belongsTo(Game);

  Game.belongsToMany(Console, {
    through: "gamesInConsole",
  });
  Console.belongsToMany(Game, {
    through: "gamesInConsole",
  });
};

module.exports = { initModels };
