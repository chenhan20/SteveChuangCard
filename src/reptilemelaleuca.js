    /*jshint esversion: 6 */
  const request = require('request');
  const puppeteer = require ('puppeteer');
  const cheerio = require('cheerio');
  const config = require ('./config');
  var querystring = require('querystring');

  
  // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
  /* jshint ignore:start */
 let form ={
   UserName:config.M.UserName,
   Password:config.M.Password
 }

// let url = 'https://tw.melaleuca.com/Account/SignIn';
let url = 'http://tw.melaleuca.com/ProductStore/Home/ProductStoreLanding';
let cookie = '20DA36C39C2DCC59D4987757AF6152B149E6CD6DB650DE5B0DAFF487399AF1738A4C7C017127AD919E750226147C41F0928C41B0348837E401613BBB11074DB49D0473368BCCECDA8670CDC42FCCA46455769E39F8A0C8E8C02EAB003DA7F976EB0CD2BB894756D3760C99C920418D218BA3A688';
formData = querystring.stringify(form);

let reptilemelaleuca=async()=>{
  console.log('======使用者帳號:'+config.M.UserName);
  let Shop =  await getshop();


  return Shop;

  function getshop(){
    return new Promise((resolve, reject)=>{
      request.cookie('.ASPXAUTH=946857C7562B9D453532508510C07979855C516D2A9914A846F78FBCE063DC36DCDFA9A8F1E69FAD74FDD418BAB49ED37C40A3EC7A11854B0CB617D6DA85C6DBFC1D2F8233227AB7C17F28894A128FA8F746240918F64FD60086B9D67DF5CF251625A9C41620A98A51847102D8DF1CD350115586');
      request({
              headers:{
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-encoding':'utf-8',
                'accept-language':'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
              },
              uri:url,
              method:'GET'
              // method:'POST',
              // body: formData
            }, (err, res, body)=>{
        if(!err && res.statusCode == 200) {
        // var teams = JSON.parse(body);
        let result=[];
        const $ = cheerio.load(body);
      //  $('a').each(function(){
      //    result.push($(this).text());
      //  });
      const ShoplistName = $('.nav-sub-item-wrapper .is-visible');
      for(let a=0;a<ShoplistName.length;a++){
        result.push(ShoplistName[a].children[2].data);
      }

        // teams.league.standard.forEach((obj)=>{
        //   mapping[obj.tricode] = obj;
        // });
        resolve(result)
      }else{
        reject('取得商品資訊失敗' + err.message);
      }
      });
    });
  }

};

/* jshint ignore:end */

  module.exports = reptilemelaleuca;
