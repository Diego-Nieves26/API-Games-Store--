const express = require("express");

// Controllers
const {
  createConsole,
  getAllConsoles,
  updateConsole,
  disableConsole,
  gameInConsole,
} = require("../controllers/consoles.controller");

// Middlewares
const {
  createConsoleValidator,
} = require("../middlewares/validators.middleware");
const { consoleExists } = require("../middlewares/consoles.middleware");

const consolesRouter = express.Router();

consolesRouter.post("/", createConsoleValidator, createConsole);

consolesRouter.get("/", getAllConsoles);

consolesRouter.patch("/:id", consoleExists, updateConsole);

consolesRouter.delete("/:id", consoleExists, disableConsole);

consolesRouter.post("/assign-game", gameInConsole);

module.exports = { consolesRouter };
