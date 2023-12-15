const express = require("express");

const app = express();

//=================================
// Greeting
//=================================

app.get("/greeting", (req, res) => {
  res.send(
    `<img src="https://media3.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif?cid=6c09b9521qhuhttkffg9blgx8aq0yw1aeq6xh7sdkj3kgclz&ep=v1_gifs_search&rid=giphy.gif&ct=g">`
  );
});

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

//=================================
// Magic 8 Ball
//=================================

const answer = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  const question = req.params.question;

  const ranRes = answer[Math.floor(Math.random() * answer.length)];

  res.send(`<h1>${question}?</h1> <h2>${ranRes}</h2>`);
});

app.listen(3000, () => {
  console.log("I am working");
});

//=================================
// Please look in Pass-it-around for more...
//=================================
