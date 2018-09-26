/*jshint esversion: 6 */

// socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'datQQQQQa' });
// });


let socket = io.connect();
let yourName;
let onlineUser = [];

let appendMessageUser = msg => {
    $('.Msgcontainer').append($('<li class="User">').text(msg));
    $('.Msgcontainer').scrollTop($('.ChatRoom').height());
    $('.Msgcontainer').scrollTop(999999);
};
let appendMessageOther = (user, msg) => {
    $('.Msgcontainer').append($('<li class="OtherImage">'));
    $('.Msgcontainer').append($('<li class="OtherName">').text(user));
    $('.Msgcontainer').append($('<li class="other">').text(msg));
    $('.Msgcontainer').scrollTop($('.ChatRoom').height());
    $('.Msgcontainer').scrollTop(999999);
};

let appendMessageMe = msg => {
    $('.Msgcontainer').append($('<li class="Me">').text(msg));
    $('.Msgcontainer').scrollTop($('.ChatRoom').height());
    $('.Msgcontainer').scrollTop(999999);
};

let UpdateOnlineUser = nicknamesArray => {
    $('.OnlineUserList li').remove();
    for (let value of nicknamesArray) {
        $('.OnlineUserList').append($('<li>').text(value));
    }
};

let appendLikeMe = () => {
    $('.Msgcontainer').append($('<li class="LikeMe"><i class="icon fas fa-thumbs-up" style="font-size:30px">'));
    $('.Msgcontainer').scrollTop($('.ChatRoom').height());
    $('.Msgcontainer').scrollTop(999999);
};
let appendLikeOther = user => {
    $('.Msgcontainer').append($('<li class="OtherImage">'));
    $('.Msgcontainer').append($('<li class="OtherName">').text(user));
    $('.Msgcontainer').append($('<li class="LikeOther"><i class="icon fas fa-thumbs-up" style="font-size:30px">'));
    $('.Msgcontainer').scrollTop($('.ChatRoom').height());
    $('.Msgcontainer').scrollTop(999999);
};

socket.on('chat message', function (data) {
    if (yourName != data.username) {
        appendMessageOther(data.username, data.msg);
    } else {
        appendMessageMe(data.msg);
    }
});
socket.on('send like', function (data) {
    if (yourName != data.username) {
        appendLikeOther(data.username);
    } else {
        appendLikeMe();
    }
    $('.msg_content').focus();
});

//送出聊天訊息
let sendMsg = () => {
    let Msg = $('.msg_content').val();
    if (Msg == "") {
        alert('請輸入內容');
        return;
    } else if (Msg.length > 60) {
        alert('你打太多字了低能兒');
        return;
    }
    socket.emit('chat message', Msg);
    $('.msg_content').val('');
    $('.msg_content').focus();
};
//送出讚
let sendlike = () => {
    socket.emit('send like');
    $('.msg_content').focus();
    $('.msg_content').val('');
};

socket.on('add user', function (data) {
    onlineUser = data.nicknamesArray;
    UpdateOnlineUser(onlineUser);
    appendMessageUser(data.username + "已加入");
    $('.msg_content').focus();
});

socket.on('user left', function (data) {
    onlineUser = data.nicknamesArray;
    if (data.username != undefined) {
        UpdateOnlineUser(onlineUser);
        appendMessageUser(data.username + "已離開");
    }
});

socket.on('ready', function (data) {
    // data.nicknamesArray可收到onlineUser了
    onlineUser = data.nicknamesArray;
    UpdateOnlineUser(onlineUser);
});

$(document).ready(function () {
    $('.nickBox').focus();
    socket.emit('ready');
    $('.ChatRoom').hide();
    $('.Btn_sendMsg').hide();
    $('.Btn_like').show();
});

let chkName = Name => {
    if (Name == "") {
        alert('請輸入名稱');
        $('.nickBox').focus();
        return false;
    }
    if (Name.length > 10) {
        alert('你名子太長了幹');
        $('.nickBox').focus();
        return false;
    }
    if (onlineUser.indexOf(Name) > -1) {
        alert('此名稱此聊天室已經有人使用');
        $('.nickBox').focus();
        return false;
    }
    return true;
};

$('.Btn_addroom').click(function () {
    let nickBox = $('.nickBox').val();
    console.log('帳號:' + nickBox);
    if (chkName(nickBox)) {
        // $.ajax({
        //     type: "POST",
        //     url: "/SteveCard/Demo03/IG/",
        //     data : {'IGid':nickBox},
        //     // dataType : 'JSON',
        //     success: function(Returndata) {
        //         alert('success');
        //     },
        //     error: function(Returndata) {
        //         alert('error');
        //     },
        //     beforeSend:function(){
        //         $('.bouncing-loader').show();
        //     },
        //     complete:function(){
        //         $('.bouncing-loader').hide();
        //     }
        // });
        yourName = nickBox;
        socket.emit('add user', nickBox);

        $('.ChatRoom').show();
        $('.UserAdd').hide();
    } else {
        return;
    }
});
$('.Btn_sendMsg').click(function () {
    sendMsg();
});
$('.Btn_like').click(function () {
    sendlike();
});
//enter 送出聊天訊息
$('.msg_content').keypress(function (e) {
    if (e.keyCode == 13) {
        sendMsg();
    }
});

$('.msg_content').keyup(function (e) {
    let Msg_length = $('.msg_content').val().length;
    if (Msg_length > 0) {
        $('.Btn_sendMsg').show();
        $('.Btn_like').hide();
    } else {
        $('.Btn_like').show();
        $('.Btn_sendMsg').hide();
    }
});

// let Demo03 = new Vue({
//     el: '.Demo03',
//     data: {
//         OnlineUser:[],yourName,sendNamechk:true
//     },
//     methods:{
//         nickboxsend:function(){
//             self= this;
//             let nickBox=$('.nickBox').val();
//             if(nickBox==""){
//                 alert('請輸入名稱');
//                 return;
//             }
//             // console.log(data);
//             // socket.emit('my other event', { my: 'datQQQQQa' });
//             socket.emit('nickBoxName' ,nickBox);

//             self.sendNamechk=false;
//             self.yourName=nickBox;          
//         },
//         chatsend:function(){
//             self= this;

//         }
//     },
//     mounted:function(){
//         self=this;
//         socket.on('OnlineUser', function (data) {
//             console.log('OnlineUser' + data);
//             this.OnlineUser=data;
//             // onlineUser.push(data);
//         });
//     }
//   });