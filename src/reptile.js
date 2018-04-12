    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
  // const url = 'https://www.usatoday.com/sports/nba/scores/';
   const url = 'https://stats.nba.com/scores/04/10/2018';
  //const url = 'http://books.toscrape.com';  //測試用網站
  
  
  let resultMinute = {};
 
  // const splitResult = function(value){
    //還不確定要篩選掉什麼 先放著
    // value = value.replace(/[\r\n\t]*/g, "");
      // console.log('----' + value + '-------' +value.length);
      // return true;
  // };

  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */
let reptile = async () => {
  const browser = await puppeteer.launch({headless: false,slowMo: 3000});
  const page = await browser.newPage();

  await page.goto(url);
  //document.querySelectorAll('.scores__inner .linescores .linescores-table table tr td');  取得比分
  //document.querySelectorAll('.scores__inner .game-body .team') 抓取還沒開打隊伍 
  //document.querySelectorAll('.scores__inner .linescore__status') 取得開打時間或是目前狀態
  //document.querySelectorAll('.scores__inner .game-highs table td a') 取得 PTS REB AST 最高球員 一場會有六個 格式 PTS  [0] Name  [1]  Name
  const result = await page.evaluate(() => {
      let data = []; 
      let elements = document.querySelectorAll('.scores__inner .linescores .linescores-table table tr td,.scores__inner .linescore__status,.scores__inner .game-highs table td a,.scores__inner .game-body .team');

      for (var element of elements){ 
          let score = element.innerText; 
          data.push(score); 
      }

      return JSON.stringify(data); 
  });

  browser.close();
  return result;
};
// reptile().then((value) => {
//   console.log(value); // Success!
// });
/* jshint ignore:end */


let reptile_BK = function(){
    let result = [];
    let resultJson ={};
    //取出網頁完整body
    request(url, (err, res, body) => {
    const $ = cheerio.load(body);
    $('table tr td').each(function(){
      result.push($(this).text().replace(/[\r\n\t]*/g, ""));
    });
    resultJson = JSON.stringify(result);
    console.log(resultJson);
  });
  return resultJson;
};


  module.exports = reptile;
