var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('SteveCard', { title: 'Express' });
});
/* GET home page. */



module.exports = router;
