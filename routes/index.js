var express = require('express');
var router = express.Router();

const userController = require('../controllers/user');
const gameController = require('../controllers/game');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mobage Account Manager' });
});

// Heaven Burns Red Page
router.get('/heaven_burns_red', function (req, res, next) {
  res.render('heaven_burns_red', {title: 'Heaven Burns Red'});
});

// Gakumas Page
router.get('/gakumas', function (req, res, next) {
  res.render('gakumas', {title: 'Gakumas'});
});

// 获取用户信息
router.get('/get_user', userController.showUser);

router.get('/games', gameController.showGames);
router.post('/game', gameController.addGame)

module.exports = router;
