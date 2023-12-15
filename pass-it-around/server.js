const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>99 Bottles of Pabst on the wall</h1> <h2><a href="/98">take on down pass it around</a></h2>`
  );
});

app.get("/:number", (req, res) => {
  const bottle = req.params.number;
  if (bottle > 0) {
    res.send(
      `<h1>${bottle} Bottles on the wall</h1> <h2><a href='/${
        bottle - 1
      }'>take one down pass it around</a></h2>`
    );
  } else {
    res.send(`<h1>0 Bottles left</h1> <h2><a href=" / ">Start Over</a></h2>`);
  }
});

app.listen(3000, () => {
  console.log("burrrrrrrrrr");
});
