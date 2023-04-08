const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8081; // replace with the port of your choice

app.use(bodyParser.json());

app.all('/webhook', (req, res) => {
    if (req.method === 'POST') {
      console.log(req.body); // do something with the payload
      res.sendStatus(200);
    } else {
      res.sendStatus(405); // method not allowed
    }
  });

app.listen(port, () => {
  console.log(`Webhook listener started on port ${port}`);
});