/*jshint esversion: 6 */
let DemoData;
let today=new Date();
let TodayDate = JSON.stringify({yyyy:today.getFullYear(),mm : today.getMonth()+1,dd:today.getDate()});

$( document ).ready(function() {
    // Handler for .ready() called.
    // let getData =function(){
    $.ajax({
        type: "POST",
        url: "/SteveCard/Demo02",
        // data : TodayDate,
        // dataType : 'JSON',
        success: function(Returndata) {
            DemoData = Returndata;
            // console.log(DemoData);
            // for(let value of DemoData){
            //   console.log(value.hTeam);
            //   console.log(value.vTeam);
            // }
            var Demo02_2 = new Vue({
                el: '.Demo02-2',
                data: {
                  object:DemoData
                }
              });
        },
        error: function(Returndata) {
            $('.Nba').text('Ajax Error' + Returndata);
            alert('Ajax Error' + Returndata);
        },
        beforeSend:function(){
            $('.ajaxlaodmodal').modal('show');
        },
        complete:function(){
            $('.ajaxlaodmodal').modal('hide');
        }
    });
  // };
  });


  // let Demo02_1 = new Vue({
  //   el: '.Demo02-1',
  //   data: {
  //     message:'vuejsHello',
  //     NbaData:DemoData
  //   },
  //   ready: function(){
  //   },
  //   methods: {
  //     Create:function(event){
  //     }
  //   }
  // });

