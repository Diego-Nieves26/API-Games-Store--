const express = require("express");

// Controllers
const {
  createUser,
  accessUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/users.controller");

// Middlewares
const { createUserValidator } = require("../middlewares/validators.middleware");
const { userExists } = require("../middlewares/users.middleware");

const usersRouter = express.Router();

usersRouter.post("/signup", createUserValidator, createUser);

usersRouter.post("/login", accessUser);

usersRouter.patch("/:id", userExists, updateUser);

usersRouter.delete("/:id", userExists, deleteUser);

usersRouter.get("/", getAllUsers);

module.exports = { usersRouter };
