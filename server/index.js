const express = require('express');
const cors = require('cors');

const PORT = 8080;

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  if (req.query.query.length === 0) res.send({ queryData: []});
  else {
    res.send({
      queryData: [ 
        {
          title: 'Test Track 1',
          imgSrc: 'https://img.favpng.com/17/6/9/starboy-album-cover-song-png-favpng-58c2b5uUwMfBRsWNNPQGeef46.jpg',
          musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
          name: 'Test Name 1',
        },
        {
          title: 'Test Track 2',
          imgSrc: 'https://cdn.theatlantic.com/thumbor/HluAQQgsJ42QoXJCa131kaG-rps=/0x40:1920x1040/960x500/media/img/mt/2015/03/Boston/original.jpg',
          musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
          name: 'Test Name 2',
        }
      ]
    });  
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));