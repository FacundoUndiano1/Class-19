
const express = require('express'); //We must require express
const router = express.Router(); //Method of express used to create routes
const mainController = require('../controllers/mainController');


router.use('/home', mainController.home);

router.use('/about', mainController.about);

router.use('/products/:idProduct', mainController.products);

//Parameterized route to channels storing users search using req.params
router.use('/channels/:idChannel', mainController.channels);

router.use('/episodes/:idEpisode/comments', mainController.episodes);

router.use('/series/:idSerie/comments/:idComment?', mainController.series);

router.use('/movies/:idMovie/comments/:idComment?', mainController.movies);

module.exports = router; //We must export each router file