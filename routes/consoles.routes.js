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
const { protectSession } = require("../middlewares/auth.middleware");

const consolesRouter = express.Router();

consolesRouter.get("/", getAllConsoles);

consolesRouter.post("/assign-game", gameInConsole);

consolesRouter.use(protectSession);

consolesRouter.post("/", createConsoleValidator, createConsole);

consolesRouter.patch("/:id", consoleExists, updateConsole);

consolesRouter.delete("/:id", consoleExists, disableConsole);

module.exports = { consolesRouter };
