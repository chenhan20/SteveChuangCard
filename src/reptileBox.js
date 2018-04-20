    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
 

  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */



//使用request 因為直接呼叫json就可以取得資訊了
let reptileBox=async(date)=>{
  console.log('抓取Nba資訊開始  抓取日期(美國日期):'+date);
  let Team =  await getTeamMappingArray();
  let BoxScore =  await getScoreboard();
  console.log('抓取完畢');
  return BoxScore;
  
  // return BoxScore.map((game )=>{
  //   hTeam:game.hteam
  //   })
  //抓box資訊
  function getScoreboard(){
    let BoxUrl = 'http://stats.nba.com/stats/boxscoretraditionalv2?EndPeriod=10&EndRange=28800&GameID=0041700132&RangeType=0&Season=2017-18&SeasonType=Playoffs&StartPeriod=1&StartRange=0';
    // date = '20180416';
    return new Promise((resolve, reject)=>{
      request('https://www.cbssports.com/nba/gametracker/boxscore/NBA_20180418_IND@CLE/', (err, res, body)=>{
      if(!err && res.statusCode == 200) {
        // var scoreboard = JSON.parse(body);
        const $ = cheerio.load(body);
        let HomeBoxData = []; //player-stats-home
        let AwayBoxData = []; //player-stats-away
        
        //爬出得分  差異為  先發:.starters-stats 替補:.bench-stats  
        $('#player-stats-away .starters-stats .stats-viewable-area .stats-rows .stats-table td,#player-stats-away .bench-stats .stats-viewable-area .stats-rows .stats-table td')
          .each(function(i,elem){
            HomeBoxData.push($(this).text());
        })
        $('#player-stats-home .starters-stats .stats-viewable-area .stats-rows .stats-table td,#player-stats-home .bench-stats .stats-viewable-area .stats-rows .stats-table td')
          .each(function(i,elem){
            AwayBoxData.push($(this).text());
        })
        
        let totalData = {HomeBoxData,AwayBoxData}

        resolve(totalData);
      }else{
        reject('取得分數失敗'+err.massage);
      }
      });
    });
  }
  //取得隊伍對應名稱
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



  module.exports = reptileBox;
