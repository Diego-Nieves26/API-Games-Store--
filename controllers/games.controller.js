// Models
const { Game } = require("../models/game.model");
const { Console } = require("../models/console.model");
const { Review } = require("../models/reviews.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createGame = catchAsync(async (req, res, next) => {
  const { title, genre } = req.body;

  const newGame = await Game.create({
    title,
    genre,
  });

  res.status(201).json({
    status: "success",
    newGame,
  });
});

const getAllGames = catchAsync(async (req, res, next) => {
  const games = await Game.findAll({
    include: [{ model: Review }, { model: Console }],
  });

  res.status(200).json({
    status: "success",
    games,
  });
});

const updateGame = catchAsync(async (req, res, next) => {
  const { game } = req;
  const { title } = req.body;

  await game.update({ title });

  res.status(204).json({ status: "success" });
});

const disableGame = catchAsync(async (req, res, next) => {
  const { game } = req;

  await game.update({ status: "disable" });

  res.status(204).json({ status: "success" });
});

const recordReview = catchAsync(async (req, res, next) => {
  const { gameId } = req.params;
  const { comment } = req.body;
  const { sessionUser } = req;

  const newReview = await Review.create({
    userId: sessionUser.id,
    gameId,
    comment,
  });

  res.status(201).json({
    status: "success",
    newReview,
  });
});

module.exports = {
  createGame,
  getAllGames,
  updateGame,
  disableGame,
  recordReview,
};
