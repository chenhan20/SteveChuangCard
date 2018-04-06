var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'a09115589451@gmail.com',
    pass: 'slnmnbricciizhqw'
  }
});

var mailOptions = {
  from: 'a09115589451@gmail.com',
  to: 'a0911558945@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });