const app = require("./app");
const dotenv = require("dotenv/config");
const mongoose = require("mongoose");

app.listen(process.env.PORT || 3000, function () {
  console.log("listening");
});
