const path = require('path');

const mainRouter = {

  home: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
  },

  about: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/about.html'));
  }

}

module.exports = mainRouter;