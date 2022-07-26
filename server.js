const express = require("express");
const logger = require("morgan");

const connection = require("./config/connection");

const compression = require("compression");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/budgetApi.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
