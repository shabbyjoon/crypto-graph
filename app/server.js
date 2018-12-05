const api = require('./apiHelpers.js');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/bitcoin', (req, res) => {
  api.getBitCoinPrice((data) => {
    res.status(200).send(data);
  });
});

app.listen(port, () => console.log(`listening on ${port}!`))

