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
const {
  protectSession,
  protectUserAcoount,
} = require("../middlewares/auth.middleware");

const usersRouter = express.Router();

usersRouter.post("/signup", createUserValidator, createUser);

usersRouter.post("/login", accessUser);

usersRouter.use(protectSession);

usersRouter.get("/", getAllUsers);

usersRouter
  .use("/:id", userExists)
  .route("/:id")
  .patch(protectUserAcoount, updateUser)
  .delete(protectUserAcoount, deleteUser);

module.exports = { usersRouter };
