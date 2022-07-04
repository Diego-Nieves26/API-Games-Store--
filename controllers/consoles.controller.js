// Models
const { Console } = require("../models/console.model");
const { Game } = require("../models/game.model");
const { GamesInConsole } = require("../models/gamesInConsole.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createConsole = catchAsync(async (req, res, next) => {
  const { name, company } = req.body;

  const newConsole = await Console.create({
    name,
    company,
  });

  res.status(201).json({
    status: "success",
    newConsole,
  });
});

const getAllConsoles = catchAsync(async (req, res, next) => {
  const consoles = await Console.findAll({ include: Game });

  res.status(200).json({
    status: "success",
    consoles,
  });
});

const updateConsole = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const { gameConsole } = req;

  await gameConsole.update({ name });
  res.status(204).json({ status: "success" });
});

const disableConsole = catchAsync(async (req, res, next) => {
  const { gameConsole } = req;

  await gameConsole.update({ status: "disable" });
  res.status(204).json({ status: "success" });
});

const gameInConsole = catchAsync(async (req, res, next) => {
  const { gameId, consoleId } = req.body;

  const gameInConsole = await GamesInConsole.create({ gameId, consoleId });

  res.status(201).json({
    status: "success",
    gameInConsole,
  });
});

module.exports = {
  createConsole,
  getAllConsoles,
  updateConsole,
  disableConsole,
  gameInConsole,
};
