const express = require("express");
const db = require("./models");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API server now at port ${PORT}!`);
  });
});
