var express = require('express');
var router = express.Router();
const sendMail = require('./testmail.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('SteveCard', { title: 'SteveCard'});
});
/* GET Steve_page1 page. */
router.get('/page1', function(req, res, next) {
  res.render('./Steve_page1');
});
/* GET Fintness page. */
router.get('/Fintness', function(req, res, next) {
  res.render('./Fintness', { title: 'Fintness'});
});

/* GET home page. */
router.get('/Demo01', function(req, res, next) {
  res.render('./Demo/Demo01');
});

router.post('/sendmail', function(req, res,next){
  console.log(req.body.YourName);
  console.log(req.body.YourEmail);
  console.log(req.body.message);
  sendMail(['a0911558945@gmail.com']);
  return res.send('success');
  // res.render('SteveCard', { send: sendMail()});
});


// let sendMail = function(){
//   return 'OK';
// }

module.exports = router;
