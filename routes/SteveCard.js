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
  /* GET Steve01 */
  router.get('/stock01', function (req, res, next) {
    res.render('./stock/stock01', {
      title: 'stock01'
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
        contentText: `英國凱萊保險公司開發後台系統`,
        projectList: ['機車險API串接(泰安)','旅平險(Portal)後台','寵物險(Portal)後台','機車險線下單','寵物險線下單'],
        isWork: true
      },
      'WISTRON': {
        name: 'WISTRON',
        friendlyname: '緯創軟體(誠品開發案)',
        startDate: '2018/05/01',
        endDate: '2018/12/14',
        contentText: `開發誠品後台系統(關貿合作)
                    全端開發 後端使用(Java) - 前端使用(jQuery、Bootstrap、javascript)
                    從靜態頁面撰寫到專案開發、專案SIT、UAT都有經歷，
                    這次的專案讓我學到了從專案初期`,
        projectList: ['靜態頁面撰寫','需求訪談','程式底層撰寫'],
        isWork: true
      },
      'MARYA_TWM_MAINTAIN_2': {
        name: 'MARYA_TWM_MAINTAIN_2',
        friendlyname: 'POS維運專案',
        startDate: '2017/11/01',
        endDate: '2018/04/31',
        contentText: `維運Pos系統與開發新功能，重大開發專案為:`,
        projectList: ['悠遊卡公司Ftp對接傳遞檔案','統一立即儲值專案(傳遞xml並改寫原先儲值專案)'],
        isWork: true
      },
      'MARYA_TWM_STRATUS': {
        name: 'MARYA_TWM_STRATUS',
        friendlyname: 'Struts下架專案',
        startDate: '2017/07/01',
        endDate: '2017/10/31',
        contentText: `Struts下架轉換SpringMVC、配合悠遊卡FTP上傳下載
        因應Struts經常出現漏洞，故協助轉換為SpringMVC框架
        此專案讓我對servlet有更深入的了解，並在主管指導下
        第一次做了系統分析(分析新的與舊的優劣)與規劃修改時程表
        讓我了解到SA職位也不是出一張嘴就能做得很好的。`,
        projectList: [],
        isWork: true
      },
      'MARYA_TWM_MAINTAIN_1': {
        name: 'MARYA_TWM_MAINTAIN_1',
        friendlyname: 'POS系統維運專案',
        startDate: '2017/02/01',
        endDate: '2017/06/31',
        contentText: `回到POS系統(Struts-Spring-hibernated框架，搭配前端Extjs)`,
        projectList: ['POS銷售富邦唯信支付增加付款別','新增倉別(客訴倉、退貨倉…)'],
        isWork: true
      },
      'ARMY_ONLINE': {
        name: 'ARMY_ONLINE',
        friendlyname: '國軍ONLINE',
        startDate: '2016/10/01',
        endDate: '2017/02/01',
        contentText: `當兵`,
        projectList: ['早點名','親愛精誠','睡覺'],
        isWork: false
      },
      'MARYA_TWM_ADD_NUM': {
        name: 'MARYA_TWM_ADD_NUM',
        friendlyname: 'POS店點擴碼專案',
        startDate: '2016/04/01',
        endDate: '2016/10/01',
        contentText: `轉換到POS系統-使用Java語言
        當時專案為需要新增三碼的店點，故有些程式碼需要修正
        例如:substring-只抓兩碼，與做壓力測試(使用JUnit)
        與撰寫測試報告，算是對Java有一個基礎的了解。`,
        projectList: [],
        isWork: true
      },
      'MARYA_TWM_MONEY_COMMISSION': {
        name: 'MARYA_TWM_MONEY_COMMISSION',
        friendlyname: '佣金系統維運專案',
        startDate: '2015/07/01',
        endDate: '2016/04/01',
        contentText: `開始於瑪亞資訊實習，駐點某電信業龍頭的佣金Team
          當時專案是使用C#與Oracle資料庫，了解各種PL/SQL語法與
          資料庫基本觀念要看懂可能有幾百行的PL/SQL並了解裡面排名
          、計量等公式，並將他套用到程式裡對當時只有在上課學過
          mysql的我是一大挑戰。`,
        projectList: [],
        isWork: true
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