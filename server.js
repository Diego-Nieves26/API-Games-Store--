const { app } = require("./app");

// Models
const { initModels } = require("./models/initModels");

// Utils
const { db } = require("./utils/database.util");

db.authenticate()
  .then(() => console.log("Db authenticated"))
  .catch((err) => console.log(err));

// Establish models relations
initModels();

db.sync()
  .then(() => console.log("Db synced"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Express app running!!");
});
