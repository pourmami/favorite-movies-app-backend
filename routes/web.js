const path = require('path');

const express = require('express');

const userController = require('../controllers/userController');
const movieController = require('../controllers/filmController');

const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        pageTitle: "Main Page",
        path: '/'
      });
});

router.post('/signup', userController.signupUser);
router.post('/login', userController.loginUser);
router.post('/geUser', userController.getUser);

router.post('/insertMovie', movieController.insertMovie);
router.get('/getMovie/:userId', movieController.getUserMovies);

module.exports = router;
