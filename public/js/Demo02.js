/*jshint esversion: 6 */
let DemoData;
let today=new Date();
let TodayDate = JSON.stringify({yyyy:today.getFullYear(),mm : today.getMonth()+1,dd:today.getDate()});

// $( document ).ready(function() {
//     // Handler for .ready() called.
//     $.ajax({
//         type: "POST",
//         url: "/SteveCard/Demo02",
//         data : TodayDate,
//         dataType : 'JSON',
//         success: function(Returndata) {
//             DemoData = Returndata;
//         // $('.Nba').text(JSON.stringify(Returndata));
//             // console.log(DemoData);
//         },
//         error: function(Returndata) {
//             $('.Nba').text('Ajax Error');
//         },
//         beforeSend:function(){
//             $('.sucessmailmodal').modal('show');
//         },
//         complete:function(){
//             $('.sucessmailmodal').modal('hide');
//         }
//     });
//   });


  let Demo02 = new Vue({
    el: '.Demo02',
    data: {
      message:'vuejsHello',
      NbaData:DemoData
    },
    ready: function(){
        // console.log('asd');
    },
    methods: {
      Create:function(event){
        console.log('asd');
      }
    }
  });