/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(`${__dirname}/../client/dist`));

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  console.log(`listening to port, ${port}`);
});
