const express = require("express");

// Controllers
const {
  createGame,
  getAllConsoles,
  updateConsole,
  disableConsole,
} = require("../controllers/consoles.controller");

// Middlewares
const {
  createConsoleValidator,
} = require("../middlewares/validators.middleware");
const { consoleExists } = require("../middlewares/consoles.middleware");

const consolesRouter = express.Router();

consolesRouter.post("/", createConsoleValidator, createGame);

consolesRouter.get("/", getAllConsoles);

consolesRouter.patch("/:id", consoleExists, updateConsole);

consolesRouter.delete("/:id", consoleExists, disableConsole);

module.exports = { consolesRouter };
