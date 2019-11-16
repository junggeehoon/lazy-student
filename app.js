const process = require('./process');
const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.post('/grade', (req, res) => {
  const data = {};
  const target = req.body["targetScore"];
  delete req.body.targetScore;
  for (let i = 0; i < req.body["category"].length; i++) {
    data[req.body["category"][i]] = [];
    data[req.body["category"][i]].push(Number(req.body["currentPts"][i]));
    data[req.body["category"][i]].push(Number(req.body["totalPts"][i]));
    data[req.body["category"][i]].push(Number(req.body["weight"][i]));
    data[req.body["category"][i]].push(Number(req.body["effort"][i]));
    data[req.body["category"][i]].push(Number(target));
  }
  console.log(process(data));
  res.send(process(data));
})

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})