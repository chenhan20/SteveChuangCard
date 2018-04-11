    /*jshint esversion: 6 */

  let nodemailer = require('nodemailer');
  let adminEmail = 'a09115589451@gmail.com';
  let myEmail =  'a0911558945@gmail.com';
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: adminEmail,
      pass: 'slnmnbricciizhqw'
    }
  });

  
  let MailTo = function(userName,userEmail,text){
    let mailOptions = {
      from: adminEmail,
      to: myEmail,
      subject: 'SteveCard個人網站信件',
      html: '<h3>內容</h3><p>' + text +' </p><br><h3>寄件人姓名</h3><p>' +  userName +'</p><br><h3>寄件人email</h3><p>' + userEmail +'</p>'
    };
    return mailOptions;
  };

/**
 * 參考:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * @param {*} email 
 */
let  checkEmail = function(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// let User = {
//   YourName:'Fuck',
//   YourEmail: 'aaaaa@GGGG',
//   message: '北七'
// };
  
  //寄信給我功能 
  let sendMail = function(User){
      console.log('收件者 : ' + myEmail);
      if(checkEmail(myEmail)){
        // transporter.sendMail(MailTo(User.YourName,User.YourEmail,User.message), function(error, info){
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Email sent: ' + info.response);
        //   }
        // });
        console.log('Email發送成功 ');
        return true;
      }else{
        console.log('Email格式錯誤 ');
        return false;
      }
  };

  //只要傳入要寄的email  測試 會錯
  var sendMail_OG = function(User){
    for(let i of User){
      console.log('收件者 : ' + i);
      if(checkEmail(User.email)){
        // transporter.sendMail(MailTo(i), function(error, info){
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Email sent: ' + info.response);
        //   }
        // });
        console.log('Email發送成功 ');
      }else{
        console.log('Email格式錯誤 ');
      }
    }
  };
  // sendMail(User);

  module.exports = sendMail;
