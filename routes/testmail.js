  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'a09115589451@gmail.com',
      pass: 'slnmnbricciizhqw'
    }
  });


// var mailOptions = {
//     from: 'a09115589451@gmail.com',
//     to: 'a0911558945@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
  let MailTo = function(userName){
    var mailOptions = {
      from: 'a09115589451@gmail.com',
      to: userName,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    return mailOptions;
  }

/**
 * 參考:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * @param {*} email 
 */
let  checkEmail = function(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
  // let User = ['a0911558945@gmail.com','ghostlwj@gmail.com'];
  
  var sendMail = function(User){
    for(let i of User){
      console.log('收件者 : ' + i);
      if(checkEmail(i)){
        // transporter.sendMail(MailTo(i), function(error, info){
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Email sent: ' + info.response);
        //   }
        // });
      }else{
        console.log('Email格式錯誤 ');
      }
    }
  }

    module.exports = sendMail;
