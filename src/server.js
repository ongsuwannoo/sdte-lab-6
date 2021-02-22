const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  console.log("TEST");
  res.send("Hello world!");
});

module.exports = app;
