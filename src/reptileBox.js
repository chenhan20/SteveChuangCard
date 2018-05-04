    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
 
  
  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */
  //目前已知四隊會取兩碼
  const TwoTeamArray = ['GSW','SAS','NOP','NYC'];

//有些隊伍會用兩碼當代號 還不知道規則
let chkTeamNum=(TameName)=>{
  let TwoTeamTF = false;
  for(let value of TwoTeamArray){
     if(TameName==value){
      TwoTeamTF=true;
     }else{
      //  nothing
     }
  };
  return TwoTeamTF;
};

//使用request 因為直接呼叫json就可以取得資訊了
let reptileBox=async(GameDate,VtriCode,HtriCode)=>{
  console.log('抓取Nba資訊開始  抓取日期(美國日期):'+GameDate);
  console.log('主場'+HtriCode);
  console.log('客場'+VtriCode);
  let Team =  await getTeamMappingArray();
  if(chkTeamNum(HtriCode)){
    HtriCode = HtriCode.substring(0,2);
  }
  if(chkTeamNum(VtriCode)){
    VtriCode = VtriCode.substring(0,2);
  }
  let BoxScore =  await getScoreboard(GameDate,HtriCode,VtriCode);
  console.log('抓取完畢');
  return BoxScore;
  
  // return BoxScore.map((game )=>{
  //   hTeam:game.hteam
  //   })
  //抓box資訊
  function getScoreboard(GameDate,HtriCode,VtriCode){
    // let BoxUrl = 'http://stats.nba.com/stats/boxscoretraditionalv2?EndPeriod=10&EndRange=28800&GameID=0041700132&RangeType=0&Season=2017-18&SeasonType=Playoffs&StartPeriod=1&StartRange=0';
    let BoxUrl = 'https://www.cbssports.com/nba/gametracker/boxscore/NBA_'+GameDate+'_'+VtriCode+'@'+HtriCode;
    // date = '20180416';
    console.log('url:'+BoxUrl);
    return new Promise((resolve, reject)=>{
      request(BoxUrl, (err, res, body)=>{
      if(!err && res.statusCode == 200) {
        // var scoreboard = JSON.parse(body);
        let ScoreDetail = [];
        
        const $ = cheerio.load(body);
        let HomeBoxData = []; //player-stats-home
        let AwayBoxData = []; //player-stats-away
        
        let HomeData = []; //player-stats-home
        let AwayData = []; //player-stats-away
        let ScoreDetailData = []; //

        //爬出得分  差異為  先發:.starters-stats 替補:.bench-stats  
        // $('#player-stats-away .stats-viewable-area .stats-rows .stats-table td,#player-stats-away .stats-viewable-area .stats-rows .stats-table td a')
        $('#player-stats-away .starters-stats .stats-viewable-area .stats-rows .stats-table td,#player-stats-away .starters-stats .stats-viewable-area .stats-rows .stats-table td a,#player-stats-away .bench-stats .stats-viewable-area .stats-rows .stats-table td,#player-stats-away .bench-stats .stats-viewable-area .stats-rows .stats-table td a')
          .each(function(i,elem){
            if($(this).attr('href')!=undefined){
              let img = 'https://sports.cbsimg.net/images/basketball/nba/players/60x80/' + $(this).attr('href').substring(48,48+$(this).attr('href').substring(48).indexOf('/')) + '.jpg';
              AwayBoxData.push(img);
            }else{
              AwayBoxData.push($(this).text());
            }
        });
        $('#player-stats-home .starters-stats .stats-viewable-area .stats-rows .stats-table td,#player-stats-home .starters-stats .stats-viewable-area .stats-rows .stats-table td a,#player-stats-home .bench-stats .stats-viewable-area .stats-rows .stats-table td,#player-stats-home .bench-stats .stats-viewable-area .stats-rows .stats-table td a')
          .each(function(i,elem){
            if($(this).attr('href')!=undefined){
              let img = 'https://sports.cbsimg.net/images/basketball/nba/players/60x80/' + $(this).attr('href').substring(48,48+$(this).attr('href').substring(48).indexOf('/')) + '.jpg';
              HomeBoxData.push(img);
            }else{
              HomeBoxData.push($(this).text());
            }
        });

        $('.linescore-gameinfo-container table .team .name,.linescore-gameinfo-container table .team .record,.linescore-gameinfo-container table .score,.linescore-gameinfo-container table .total-score')
          .each(function(i,elem){
            ScoreDetail.push($(this).text());
          });
        
        let TeamImageData = {'AwayImage':$('.team-logo-container a img')[0].attribs.src,'HomeImage':$('.team-logo-container a img')[1].attribs.src};
        // console.log(TeamImageData.AwayImage);
        // console.log(TeamImageData.HomeImage);

        let PointData = {'AwayPoint':$('.team-score-container .score-text')[0].innerText,'HomePoint':$('.team-score-container .score-text')[0].innerText};


        $('.center-content-container ').each(function(i,elem){
          console.log($(this).text());
        })

        // const GameFinal =[0].innerText =='FINAL' ;
        // console.log('打玩了' + GameFinal);

        //登陸球員數量
        let Homenum = (HomeBoxData.length/17);
        let Awaynum = (AwayBoxData.length/17); 
        let ScoreDetailnum = (ScoreDetail.length/2); 
        for(let i=0;i<Homenum;i++){
          HomeData.push(HomeBoxData.slice(i*17,(i+1)*17));
        };
        for(let i=0;i<Awaynum;i++){
          AwayData.push(AwayBoxData.slice(i*17,(i+1)*17));
        };
        for(let i=0;i<2;i++){
          ScoreDetailData.push(ScoreDetail.slice(i*ScoreDetailnum,(i+1)*ScoreDetailnum));
        };

        let totalData = {HomeData,AwayData,ScoreDetailData,TeamImageData,PointData};

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
