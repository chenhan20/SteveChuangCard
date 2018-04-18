    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
 
  // const splitResult = function(value){
    //還不確定要篩選掉什麼 先放著
    // value = value.replace(/[\r\n\t]*/g, "");
      // console.log('----' + value + '-------' +value.length);
      // return true;
  // };

  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */
  // let reptile = async () => {
  // let start = new Date().getTime();
  // const browser = await puppeteer.launch({headless:false});
  // const page = await browser.newPage();
  // console.log('爬蟲開始 網址:'+url);
  // await page.goto(url);
  // await page.waitFor(2000);
  //document.querySelectorAll('.scores__inner .linescores .linescores-table table tr td');  取得比分
  //document.querySelectorAll('.scores__inner .game-body .team') 抓取還沒開打隊伍 
  //document.querySelectorAll('.scores__inner .linescore__status') 取得開打時間或是目前狀態
  //document.querySelectorAll('.scores__inner .game-highs table td a') 取得 PTS REB AST 最高球員 一場會有六個 格式 PTS  [0] Name  [1]  Name
//   const result = await page.evaluate(() => {
//       let data = []; 
//       let elements = document.querySelectorAll('.scores__inner .linescores .linescores-table table tr td,.scores__inner .linescore__status,.scores__inner .game-highs table td a,.scores__inner .game-body .team');

//       for (var element of elements){ 
//           let score = element.innerText; 
//           data.push(score); 
//       }
//       return data; 
//     });
//     browser.close();
//     let end = new Date().getTime();
//     console.log('耗時:'+(end-start)/1000+'秒');
//   // console.log(result);
//   return result;
// };
// reptile().then((value) => {
//   console.log(value); // Success!
// });


//使用request 因為直接呼叫json就可以取得資訊了
let reptile=async(date)=>{
  console.log('抓取Nba資訊開始  抓取日期(美國日期):'+date);
  let Team =  await getTeamMappingArray();
  let Scoreboard =  await getScoreboard();
  console.log('抓取完畢' + date + '共有' + Scoreboard.length + '場比賽');
  return Scoreboard.map((game )=>{
    return {
      status:game.statusNum,//比賽狀態 1:尚未開打 ,2:Live,3:結束
      playoffs:game.playoffs,//若此物件有值 代表為季後賽模式
      hTeam:{name:Team[game.hTeam.triCode].fullName,score:game.hTeam.score,logo:'https://stats.nba.com/media/img/teams/logos/' + game.hTeam.triCode +'_logo.svg'},
      vTeam:{name:Team[game.vTeam.triCode].fullName,score:game.vTeam.score,logo:'https://stats.nba.com/media/img/teams/logos/' + game.vTeam.triCode +'_logo.svg'}};
    })
  //抓隊伍對應
  function getScoreboard(){
    // date = '20180416';
    return new Promise((resolve, reject)=>{
      request('https://data.nba.net/prod/v2/'+ date +'/scoreboard.json', (err, res, body)=>{
      if(!err && res.statusCode == 200) {
        var scoreboard = JSON.parse(body);
        resolve(scoreboard.games);
      }else{
        reject('取得分數失敗'+error.massage);
      }
      });
    });
  }
  //取分數
  function getTeamMappingArray(){
    return new Promise((resolve, reject)=>{
      request('https://data.nba.net/prod/v1/2017/teams.json', (err, res, body)=>{
        if(!err && res.statusCode == 200) {
        var teams = JSON.parse(body);
        var mapping = [];
        teams.league.standard.forEach((obj)=>{
          mapping[obj.tricode] = obj;
        });
        resolve(mapping)
      }else{
        reject('取得隊伍資訊失敗' + err.message);
      }
      });
    });
  }
}

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
