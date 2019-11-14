/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));

const exercisesRouter = require("../database/routes/exercises");
const usersRouter = require("../database/routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`listening to port, ${port}`);
});
