const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes/router");

require("./db/mongoose");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST,HEAD,PUT, DELETE");
  next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Set up Express.js routes
app.use(router);

module.exports = app;
