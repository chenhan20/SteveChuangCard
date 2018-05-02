# SteveChuang個人網頁

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
```pug
    th(v-if="object.ScoreDetailData && object.ScoreDetailData[0].length=='8'") ot
```



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

