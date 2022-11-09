
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.use('/home', mainController.home);

router.use('/about', mainController.about);

//Parameterized route to products
router.use('/products/:idProduct', mainController.products);

//Parameterized route to channels storing users search
router.use('/channels/:idChannel', mainController.channels);

router.use('/episodes/:idEpisode/comments', mainController.episodes);

router.use('/series/:idSerie/comments/:idComment?', mainController.series);

router.use('/movies/:idMovie/comments/:idComment?', mainController.movies);

module.exports = router;