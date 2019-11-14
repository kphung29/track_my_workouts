/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const db = require("../database/index");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  console.log(`listening to port, ${port}`);
});
