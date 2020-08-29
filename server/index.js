const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({
    artistData: {
      name: {
        first: 'test',
        last: 'testLast',
      },
      img: 'test/image/src',
      tracks: []
    }
  });  
});


app.get('/text/artist', (req, res) => {
  res.json({ message: 'hello'})
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));