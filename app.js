const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.post('/grade', (req, res) => {
  res.send(req.body);
  console.log(req.body)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})