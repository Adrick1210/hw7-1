const express = require("express");

const app = express();

//=================================
// Greeting
//=================================

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hello there, ${name}</h1>`);
});

//=================================
// Calculator
//=================================

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total;
  const percent = req.params.tipPercentage;
  const theTip = (total * percent) / 100;
  res.send(`<h1>${theTip}</h1>`);
});

app.listen(3000, () => {
  console.log("I am working");
});
