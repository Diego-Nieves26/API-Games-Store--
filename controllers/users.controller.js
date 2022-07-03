// Models
const { User } = require("../models/user.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createUser = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({
    name: username,
    email,
    password,
  });

  res.status(201).json({
    status: "success",
    newUser,
  });
});

const accessUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  res.status(201).json({
    status: "success",
    email,
    password,
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
