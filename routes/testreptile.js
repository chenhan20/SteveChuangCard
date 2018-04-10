    /*jshint esversion: 6 */
  const request = require('request');
  const cheerio = require('cheerio');
  // const url = 'https://www.usatoday.com/sports/nba/scores/';
  const url = 'https://www.basketball-reference.com/';
  
  let resultMinute = {};
 
  const splitResult = function(value){
    console.log(value.replace('/\r\n|\n/g',""));
     
  };

  let reptile = () => {
    //取出網頁完整body
    request(url, (err, res, body) => {
    // console.log(body);
    const $ = cheerio.load(body);
    let result = [];
    // $('#card_full_width_main ul li ul li ul li').each(function(){
    $('#scores .game_summary table td').each(function(){
      // console.log($(this).text());
      // console.log($(this));
      result.push($(this).text());
    });
    // let num=result.length/16;
    // for(let i=0;i<=num;i++){
    //   // console.log(result.slice(i,i*16));
    //   resultMinute = {i:result.slice(i,i*16)};
    // }
    // console.log(result.slice(0,16));
    // console.log(result.filter(p => p.));
    result.filter(splitResult);
    });
};

  reptile();

  module.exports = reptile;
