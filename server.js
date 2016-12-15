const express = require('express');
const path = require('path');

const app = express();
const staticPath = path.join(__dirname, 'dist');

app.use(express.static(staticPath))
  .get('/*', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath,
    });
  }).listen(process.env.PORT || 8080, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8080');
  });
