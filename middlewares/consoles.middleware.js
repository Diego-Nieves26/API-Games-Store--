// Models
const { Console } = require("../models/console.model");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const consoleExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const gameConsole = await Console.findOne({ where: { id } });

  if (!gameConsole) {
    return next(new AppError("Console not found", 404));
  }

  req.gameConsole = gameConsole;
  next();
});

module.exports = { consoleExists };
