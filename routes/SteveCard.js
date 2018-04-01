var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('SteveCard', { title: 'Express'});
});
/* GET Steve_page1 page. */
router.get('/page1', function(req, res, next) {
  res.render('./Steve_page1');
});
/* GET Fintness page. */
router.get('/Fintness', function(req, res, next) {
  res.render('./Fintness');
});

/* GET home page. */
router.get('/Demo01', function(req, res, next) {
  res.render('./Demo/Demo01');
});


module.exports = router;
