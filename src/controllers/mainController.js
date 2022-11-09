
//Controller contains business logic and execution
const path = require('path');

const mainRouter = {

  home: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
  },

  about: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/about.html'));
  },

  products: (req, res) => {
  res.send('Welcome to the product details');
  },

  //req.params shows user interactions in :idChannels
  channels: (req, res) => {
    res.send('Youre watching channel ' + req.params.idChannel);
  },

  episodes: (req, res) => {
    res.send('Welcome to the comments of the episode ' + req.params.idEpisode);
  },

  series: (req, res) => {
      res.send('Welcome to the comment section of the serie ' + req.params.idSerie + ' and you are reading the comments of the page ' + req.params.idComment);
  },

  //You can either use or not a parameter
  movies: (req, res) => {
    if (req.params.idComment == undefined) {
      res.send('Welcome to the comment section of the movie ' + req.params.idMovie);
    } else {
      res.send('Welcome to the comment section of the movie ' + req.params.idMovie + ' and you are reading the comments of the page ' + req.params.idComment);
    }
  }
}

module.exports = mainRouter; //We must export each controller file