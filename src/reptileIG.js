    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
 
  
  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */



//使用request 因為直接呼叫json就可以取得資訊了
let reptileIG=async(date)=>{
  console.log('抓取IG資訊開始  抓取帳號:'+date);
  let IG =  await getIg();
  return IG;
  //抓日期分數
  function getIg(){
    date = 'chenhan20';
    return new Promise((resolve, reject)=>{
      request('https://instadp.com/user/chenhan20', (err, res, body)=>{
      if(!err && res.statusCode == 200) {
        const $ = cheerio.load(body);
        console.log($('.picture').src);        
      
         resolve('123');
      }else{
        reject('取得資訊失敗'+error.massage);
      }
      });
    });
  }
}

/* jshint ignore:end */

  module.exports = reptileIG;
