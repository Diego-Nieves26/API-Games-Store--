const express = require("express");

// Controllers
const {
  createGame,
  getAllGames,
  updateGame,
  disableGame,
  recordReview,
} = require("../controllers/games.controller");

// Middlewares
const { createGameValidator } = require("../middlewares/validators.middleware");
const { gameExists } = require("../middlewares/games.middleware");
const { protectSession } = require("../middlewares/auth.middleware");

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);

gamesRouter.use(protectSession);

gamesRouter.post("/", createGameValidator, createGame);

gamesRouter.patch("/:id", gameExists, updateGame);

gamesRouter.delete("/:id", gameExists, disableGame);

gamesRouter.post("/reviews/:gameId", recordReview);

module.exports = { gamesRouter };
