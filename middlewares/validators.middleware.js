const { body, validationResult } = require("express-validator");

const { AppError } = require("../utils/appError.util");

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidator = [
  body("username").notEmpty().withMessage("Name cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .isAlphanumeric()
    .withMessage("Password must contain letters and numbers"),
  checkResult,
];

const createConsoleValidator = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("company").notEmpty().withMessage("Company cannot be empty"),
  checkResult,
];

const createGameValidator = [
  body("title").notEmpty().withMessage("Title cannot be empty"),
  body("genre").notEmpty().withMessage("Genre cannot be empty"),
  checkResult,
];

module.exports = {
  createUserValidator,
  createConsoleValidator,
  createGameValidator,
};
