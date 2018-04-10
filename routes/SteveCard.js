  /*jshint esversion: 6 */

const express = require('express');
var router = express.Router();
const sendMail = require('./testmail.js');
const reptile = require('./testreptile.js');



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
  res.render('./Demo/Demo01', { title: 'Demo01'});
});
/* GET home page. */
router.get('/Demo02', function(req, res, next) {
  //爬當日nab戰績功能
  let NbaArray = reptile();
  console.log('NbaArray' + NbaArray);
  res.render('./Demo/Demo02', { title: 'Demo02' });
});



//寄送mail功能
router.post('/sendmail', function(req, res,next){
  let YourName = req.body.YourName;
  let YourEmail = req.body.YourEmail;
  let message = req.body.message;
  console.log(YourName);
  console.log(YourEmail);
  console.log(message);
  let User = {
    YourName:YourName,
    YourEmail: YourEmail,
    message: message
  };
  if(sendMail(User)){
    return res.send('success');
  }else{
    return res.send('error');
  }
  // res.render('SteveCard', { send: sendMail()});
});


//處理404問題
router.get('*',function(req,res){
  res.render('./main/error/error', { URL: req.originalUrl });
});

// let sendMail = function(){
//   return 'OK';
// }

module.exports = router;
