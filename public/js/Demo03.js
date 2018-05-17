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
socket.on('add user',function(data){
    appendMessage(data.username+"已加入");
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
    let Msg=$('.msg_content').val();
    if(Msg==""){
        alert('請輸入內容');
        return;
    }
    socket.emit('chat message' ,Msg);
    $('.msg_content').val('');
});


function appendMessage(msg){
    $('.Msgcontainer').append($('<li>').text(msg));
    // var message = document.getElementsByClassName("ChatRoom");
    // message.scrollTop = message.scrollHeight;

  }

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