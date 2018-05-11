/*jshint esversion: 6 */


// socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'datQQQQQa' });
// });



let socket = io.connect();
let yourName;
let Demo03 = new Vue({
    el: '.Demo03',
    data: {
        onlineUser:[],yourName,sendNamechk:true
    },
    methods:{
        nickboxsend:function(){
            self= this;
            let nickBox=$('.nickBox').val();
            if(nickBox==""){
                alert('請輸入名稱');
                return;
            }
            // console.log(data);
            // socket.emit('my other event', { my: 'datQQQQQa' });
            socket.emit('nickBoxName' ,nickBox);
            
            self.sendNamechk=false;
            self.yourName=nickBox;          
        },
        chatsend:function(){
            self= this;

        }
    },
    mounted:function(){
        self=this;
        socket.on('OnlineUser', function (data) {
            console.log('OnlineUser' + data);
            // onlineUser.push(data);
        });
    }
  });