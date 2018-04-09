var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
// router.get('/SteveCard', function(req, res, next) {
//   res.render('SteveCard', { title: 'SteveCard' });
// });


module.exports = router;
