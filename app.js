const express = require("express");

// Routers
const { consolesRouter } = require("./routes/consoles.routes");
const { usersRouter } = require("./routes/users.routes");
const { gamesRouter } = require("./routes/games.routes");

// Global error controller
const { globalErrorHandler } = require("./controllers/error.controller");

// Utils
const { AppError } = require("./utils/appError.util");

// Init express app
const app = express();

app.use(express.json());

// Endpoints
app.use("/api/v1/consoles", consolesRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/games", gamesRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
