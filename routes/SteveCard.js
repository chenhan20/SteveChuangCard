  /*jshint esversion: 6 */

const express = require('express');
var router = express.Router();
const sendMail = require('../src/mail.js');
const reptile = require('../src/reptile.js');



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

/* GET Demo01. */
router.get('/Demo01', function(req, res, next) {
  res.render('./Demo/Demo01', { title: 'Demo01'});
});
/* GET Demo02 */
router.get('/Demo02', function(req, res, next) {
  res.render('./Demo/Demo02', { title: 'Demo02' });
});

/* POST Demo02 */
  /* jshint ignore:start */

router.post('/Demo02',async function(req, res, next) {
    //解析日期
    const postDate = req.body.yyyy + (req.body.mm<10 ? '0' : '') + req.body.mm + req.body.dd;
    
    let GameData=await reptile(postDate);
    res.json(GameData);
  });
  /* jshint ignore:end */


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
