/*jshint esversion: 6 */


// socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'datQQQQQa' });
// });



let socket = io.connect();
let yourName;
let onlineUser=[];

socket.on('chat message', function (data) {
    console.log('OnlineUser' + data);
    appendMessage(data.username+":"+data.msg);

    // $('.OnlineUser').append(data);
});

let appendMessage =(msg) =>{
    $('.Msgcontainer').append($('<li>').text(msg));
    $('.Msgcontainer').scrollTop($('.ChatRoom').height())
    // var scrollHeight = $('.ChatRoom').prop("scrollHeight");
    // $('.ChatRoom').animate({scrollTop:scrollHeight}, 400);

    // $('.ChatRoom').scrollIntoView(400);
};
let UpdateOnlineUser =(nicknamesArray) => {
    $('.OnlineUserList li').remove();
    for(let value of nicknamesArray){
        $('.OnlineUserList').append($('<li>').text(value));
    }
};

//送出聊天訊息
let sendMsg =()=>{
    let Msg=$('.msg_content').val();
    if(Msg==""){
        alert('請輸入內容');
        return;
    }
    socket.emit('chat message' ,Msg);
    $('.msg_content').val('');
};

socket.on('add user',function(data){
    UpdateOnlineUser(data.nicknamesArray);
    appendMessage(data.username+"已加入");
});

socket.on('user left',function(data){
    // data.nicknamesArray可收到onlineUser了
    UpdateOnlineUser(data.nicknamesArray);
    appendMessage(data.username+"已離開");
  });


$( document ).ready(function() {
    $('.ChatRoom').hide();
});


$('.Btn_addroom').click(function() {
    let nickBox=$('.nickBox').val();
    if(nickBox==""){
        alert('請輸入名稱');
        return;
    }
    socket.emit('add user' ,nickBox);

    $('.ChatRoom').show();
    $('.UserAdd').hide();

});
$('.Btn_sendMsg').click(function() {
    sendMsg();
});
//enter 送出聊天訊息
$('.msg_content').keypress(function(e){
    if(e.keyCode==13){
        sendMsg();
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