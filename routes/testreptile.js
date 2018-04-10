    /*jshint esversion: 6 */
  const request = require('request');
  const cheerio = require('cheerio');
  // const url = 'https://www.usatoday.com/sports/nba/scores/';
  const url = 'https://www.basketball-reference.com/boxscores/';
  
  let resultMinute = {};
 
  // const splitResult = function(value){
    //還不確定要篩選掉什麼 先放著
    // value = value.replace(/[\r\n\t]*/g, "");
      // console.log('----' + value + '-------' +value.length);
      // return true;
  // };

  let reptile = function(){
    let result = [];
    let resultJson ={};
    //取出網頁完整body
    request(url, (err, res, body) => {
    // console.log(body);
    const $ = cheerio.load(body);
    $('.game_summaries .game_summary .teams td').each(function(){
      // console.log($(this).text());
      // console.log($(this));
      result.push($(this).text().replace(/[\r\n\t]*/g, ""));
    });
    resultJson = JSON.stringify(result);
    // console.log(resultJson);
    // return 'asdasd';
  });
  return resultJson;
};

  //  reptile();

  module.exports = reptile;
