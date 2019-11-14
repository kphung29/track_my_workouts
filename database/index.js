/* eslint-disable no-console */
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Mongo connected!");
});

module.exports = db;
