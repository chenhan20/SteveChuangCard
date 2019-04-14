  /*jshint esversion: 6 */

  const express = require('express');
  var router = express.Router();
  const sendMail = require('../src/mail.js');
  const reptile = require('../src/reptile.js');
  const reptileBox = require('../src/reptileBox.js');
  const reptilemelaleuca = require('../src/reptilemelaleuca.js');
  // const config = require ('../src/config');
  // const io = require('socket.io');



  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('SteveCard', {
      title: 'SteveCard'
    });
  });
  /* GET Steve_page1 page. */
  router.get('/page1', function (req, res, next) {
    res.render('./Steve_page1');
  });
  /* GET Fintness page. */
  router.get('/Fintness', function (req, res, next) {
    res.render('./Fintness', {
      title: 'Fintness'
    });
  });

  /* GET Demo01. */
  router.get('/Demo01', function (req, res, next) {
    res.render('./Demo/Demo01', {
      title: 'Demo01'
    });
  });
  /* GET Demo02 */
  router.get('/Demo02', function (req, res, next) {
    res.render('./Demo/Demo02', {
      title: 'Demo02'
    });
  });
  /* GET Demo05 */
  router.get('/Demo05', function (req, res, next) {
    res.render('./Demo/Demo05', {
      title: 'Demo05'
    });
  });
  /* GET Steve01 */
  router.get('/Steve01', function (req, res, next) {
    res.render('./Demo/Steve01', {
      title: 'Steve01'
    });
  });

  /* POST Demo02 */
  /* jshint ignore:start */

  router.post('/Demo02', async function (req, res, next) {
    //解析日期
    const postDate = req.body.yyyy + (req.body.mm < 10 ? '0' : '') + req.body.mm + (req.body.dd < 10 ? '0' : '') + req.body.dd;

    let GameData = await reptile(postDate);
    res.json(GameData);
  });

  router.get('/Demo02/BoxScore/*', function (req, res, next) {
    const GameId = req.path.substr(23, 10);
    const VtriCode = req.path.substr(17, 3);
    const HtriCode = req.path.substr(20, 3);
    const GameDate = req.path.substr(33, 8);
    res.render('./Demo/BoxScore', {
      title: 'BoxScore',
      'GameDate': GameDate,
      'GameId': GameId,
      'VtriCode': VtriCode,
      'HtriCode': HtriCode
    });
  });
  router.post('/Demo02/BoxScore/', async function (req, res, next) {
    const GameId = req.body.GameId;
    const VtriCode = req.body.VtriCode;
    const HtriCode = req.body.HtriCode;
    const GameDate = req.body.GameDate;
    console.log('GameID : ' + GameId);
    console.log('GameDate : ' + GameDate);
    console.log('VtriCode : ' + VtriCode);
    console.log('HtriCode : ' + HtriCode);
    //爬出這場比賽數據 根據gameId(未完成)

    let BoxData = await reptileBox(GameDate, VtriCode, HtriCode);
    res.send(BoxData);
  });
  router.post('/Demo03/IG', async function (req, res, next) {
    const IGId = req.body.IGid;

    console.log('IGId : ' + IGId);


    res.send(BoxData);
  });


  router.post('/Demo04', async function (req, res, next) {
    let ShopList = await reptilemelaleuca();

    res.send(ShopList);
  });

  router.post('/initData', function (req, res, next) {
    const PROJECT = {
      'CARELINE': {
        name: 'CARELINE',
        friendlyname: '英國凱萊後台開發案',
        startDate: '2018/12/17',
        endDate: '',
        yearText: ''
      },
      'WISTRON': {
        name: 'WISTRON',
        friendlyname: '緯創軟體(誠品開發案)',
        startDate: '2018/05/01',
        endDate: '2018/12/14',
        yearText: ''
      },
      'MARYA_TWM_MAINTAIN_2': {
        name: 'MARYA_TWM_MAINTAIN_2',
        friendlyname: 'POS維運專案',
        startDate: '2017/11/01',
        endDate: '2018/04/31',
        yearText: ''
      },
      'MARYA_TWM_STRATUS': {
        name: 'MARYA_TWM_STRATUS',
        friendlyname: 'Struts下架專案',
        startDate: '2017/07/01',
        endDate: '2017/10/31',
        yearText: ''
      },
      'MARYA_TWM_MAINTAIN_1': {
        name: 'MARYA_TWM_MAINTAIN_1',
        friendlyname: 'POS系統維運專案',
        startDate: '2017/02/01',
        endDate: '2017/06/31',
        yearText: ''
      },
      'ARMY_ONLINE': {
        name: 'ARMY_ONLINE',
        friendlyname: '國軍ONLINE',
        startDate: '2016/10/01',
        endDate: '2017/02/01',
        yearText: ''
      },
      'MARYA_TWM_ADD_NUM': {
        name: 'MARYA_TWM_ADD_NUM',
        friendlyname: 'POS店點擴碼專案',
        startDate: '2016/04/01',
        endDate: '2016/10/01',
        yearText: ''
      },
      'MARYA_TWM_MONEY_COMMISSION': {
        name: 'MARYA_TWM_MONEY_COMMISSION',
        friendlyname: '佣金系統維運專案',
        startDate: '2015/07/01',
        endDate: '2016/04/01',
        yearText: ''
      },
    };
    let data = {
      PROJECT: PROJECT
    }
    res.send(data);
  });


  /* jshint ignore:end */


  //寄送mail功能
  router.post('/sendmail', function (req, res, next) {
    let YourName = req.body.YourName;
    let YourEmail = req.body.YourEmail;
    let message = req.body.message;
    console.log(YourName);
    console.log(YourEmail);
    console.log(message);
    let User = {
      YourName: YourName,
      YourEmail: YourEmail,
      message: message
    };
    if (sendMail(User)) {
      return res.send('success');
    } else {
      return res.send('error');
    }
    // res.render('SteveCard', { send: sendMail()});
  });



  /* GET Demo03 */
  router.get('/Demo03', function (req, res, next) {
    res.render('./Demo/Demo03', {
      title: 'Steve聊天室'
    });
  });
  /* GET Demo03 */
  router.get('/Demo04', function (req, res, next) {
    res.render('./Demo/Demo04', {
      title: 'Demo04'
    });
  });


  //處理404問題
  router.get('*', function (req, res) {
    res.render('./main/error/error', {
      URL: req.originalUrl
    });
  });

  // let sendMail = function(){
  //   return 'OK';
  // }

  module.exports = router;