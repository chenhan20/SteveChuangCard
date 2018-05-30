    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
 
  
  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */


let url = 'https://tw.melaleuca.com/Account/';
let reptilemelaleuca=async()=>{
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  console.log('爬蟲開始 網址:'+url);
  await page.goto(url);
  await page.waitFor(2000);
  const result = await page.evaluate(() => {
    let data = []; 
    let elements = document.querySelectorAll('#divNotAMemeber');

    for (var element of elements){ 
        let score = element.innerText; 
        console.log(score);
        data.push(score); 
    }
    return data; 
  });
  browser.close();
  return result;
};

/* jshint ignore:end */

  module.exports = reptilemelaleuca;
