/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exercisesRouter = require("../database/routes/exercises");
const usersRouter = require("../database/routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

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
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`listening to port, ${port}`);
});
