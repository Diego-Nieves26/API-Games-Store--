const { app } = require("./app");

// Models
const { User } = require("./models/user.model");
const { Game } = require("./models/game.model");
const { Review } = require("./models/reviews.model");
const { Console } = require("./models/console.model");

// Utils
const { db } = require("./utils/database.util");

db.authenticate()
  .then(() => console.log("Db authenticated"))
  .catch((err) => console.log(err));

// Establish models relations
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

db.sync()
  .then(() => console.log("Db synced"))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log("Express app running!!");
});
