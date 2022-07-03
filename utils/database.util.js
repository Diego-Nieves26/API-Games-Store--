const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "nieves22",
  port: 5432,
  database: "db-games-store",
  logging: false,
});

module.exports = { db, DataTypes };
