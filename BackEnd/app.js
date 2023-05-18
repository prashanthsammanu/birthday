const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/randomNum", (req, res) => {
  const ranAge = getRandomInt(1, 100).toString();
  res.send({
    ranAge,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
