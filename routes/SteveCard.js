var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('SteveCard', { title: 'Express' });
});
/* GET home page. */
router.get('/page1', function(req, res, next) {
  res.render('./Steve_page1');
});
/* GET home page. */
router.get('/Fintness', function(req, res, next) {
  res.render('./Fintness');
});


module.exports = router;
