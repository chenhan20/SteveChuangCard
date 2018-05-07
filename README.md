# SteveChuang個人網頁

## [個人首頁](https://calm-woodland-74729.herokuapp.com/SteveCard/)
## [NBA比賽資訊 預設當天 可切換日期](https://calm-woodland-74729.herokuapp.com/SteveCard/Demo02)

## 專案clone前置作業

* 準備node_modules`npm install`
* 準備bower`bower install`


***
## 注意事項
- 推到heroku上的話需再package.json的scripts加入(因為要讓heroku安裝bower.json內依賴的東西)
```javascript
    "postinstall": "node_modules/.bin/bower install"
```
- 要使用**Node.js7**以上的版本 否則async await語法不支援 會有錯誤


***	  


## NBA爬蟲練習

###目前功能
- [x] 當日比分
- [x] Live 結束 未開打判斷
- [ ] 即時更新live場次比分
- [x] 日期切換 查看切換日期比賽比分
- [x] BOX詳細資訊
- [x] 各節得分

### 遭遇問題

1. 抓取各節比分時 是想把資訊都帶到table內 並使用vuejs的`v-for='value in object`功能  
```pug
    //table head部分
    th(v-if="object.ScoreDetailData[0].length=='8'") ot
    //table body部分
    tr(v-for='value in object.ScoreDetailData')
      td ...
      td ...
      td ...
      td(v-show="value.length=='8'") {{value[6]}}
```
原本以為這樣就可以成功了，th部分不能用value的原因為沒有在`v-for`裡面  
但是會出現`TypeError: Cannot read property '0' of undefined`的錯誤  
應該是因為 object還沒從ajax娶回來 他就取它的值 所以出現的錯誤  
解決方法為先判斷是不是有抓回來資料了!  
~~th(v-if="object.ScoreDetailData[0].length=='8'") ot~~  
**th(v-if="object.ScoreDetailData && object.ScoreDetailData[0].length=='8'") ot**

2. 有些隊伍詳細資訊 爬蟲網址會是隊伍兩碼 例如勇士 會是GS 不知道規則 
已知兩碼  
勇士 GS  
鵜鶘 NO  
馬刺 SA  
尼克 NY  




## 使用技術

- [x] node.js
- [x] pug
- [x] bootstrap4
- [x] vuejs
- [x] bower
- [ ] node.js套件
- [x] express
- [x] nodemailer
- [x] puppeteer

***

## IDE
* VSCODE
* ESLint
* JSHint
* TSLint
* Code Runner
**asd**
***

## 參考網站
* [使用puppeteer教學](https://itw01.com/VYNGESV.html)
* [css load資料時的動畫](https://atomiks.github.io/30-seconds-of-css/)
## 爬蟲網站

__***此爬蟲網站無任何收益，僅供練習使用 若有侵權敬請告知 馬上移除***__

[以此場比賽為範例](http://localhost:8002/SteveCard/Demo02/BoxScore/NOPGSW004170023220180501)

* [NBA比分資訊JSON傳入日期20180502](https://data.nba.net/prod/v2/20180502/scoreboard.json)
**傳入美國時間 得到當天每一場比賽資訊**
* [NBA隊伍資訊JSON](https://data.nba.net/prod/v1/2017/teams.json) 
**傳入隊伍資訊簡寫 得出完整隊伍名稱**
* [NBA那一場比賽詳細資訊](https://www.cbssports.com/nba/gametracker/boxscore/NBA_20180501_NO@GS)
**傳入日期 & 客場隊伍@主場隊伍 得到比賽資訊 有使用cheerio 因為是爬蟲 不是爬json**

