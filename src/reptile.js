    /*jshint esversion: 6 */
    
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
  // const url = 'https://www.usatoday.com/sports/nba/scores/';
  const url = 'https://stats.nba.com/scores/04/10/2018';
  
  let resultMinute = {};
 
  // const splitResult = function(value){
    //還不確定要篩選掉什麼 先放著
    // value = value.replace(/[\r\n\t]*/g, "");
      // console.log('----' + value + '-------' +value.length);
      // return true;
  // };

  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */
  let reptile = async () =>{    
    console.log('12312312');
    const headless = true;  //是否開啟瀏覽器 false為開
    const slowMo = 0;
    const browser = await puppeteer.launch({headless,slowMo}); 
    const page = await browser.newPage(); // jshint ignore:line
    await page.goto('https://stats.nba.com/scores/04/10/2018'); 
    // await page.waitFor(1000);
    const result = await page.evaluate(() => {
      let NBA = document.querySelectorAll('.scores__inner .linescores .linescores-table table tr td');
      let NBAresult = [];
    console.log(NBA);
    console.log('length' + NBA.length);
    for(var element of NBA){
      let Team = element.innerText;
      NBAresult.push(Team);
    };

    return NBAresult;
  });
  
  // console.log(result);
  browser.close();
  return result;
}
/* jshint ignore:end */

   reptile();


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
