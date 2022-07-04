const bcrypt = require("bcryptjs");

// Models
const { User } = require("../models/user.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const createUser = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name: username,
    email,
    password: hashPassword,
  });

  newUser.password = undefined;

  res.status(201).json({
    status: "success",
    newUser,
  });
});

const accessUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, status: "active" } });

  if (!user) {
    return next(new AppError("Credentials invalid", 404));
  }

  const isPasswordaValid = await bcrypt.compare(password, user.password);

  if (!isPasswordaValid) {
    return next(new AppError("Credentials invalid", 404));
  }

  res.status(201).json({
    status: "success",
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({ name, email });

  res.status(204).json({ status: "success" });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: "disabled" });

  res.status(204).json({ status: "success" });
});

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: { status: "active" },
  });

  res.status(200).json({
    status: "success",
    users,
  });
});

module.exports = {
  createUser,
  accessUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
