require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "postgres",
  },
};
