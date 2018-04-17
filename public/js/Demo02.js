/*jshint esversion: 6 */
// let DemoData;
let TwDay=new Date();
let TwdayDate = {yyyy:TwDay.getFullYear(),mm : TwDay.getMonth()+1,dd:TwDay.getDate()};
let USAday = new Date();
USAday.setDate(USAday.getDate() - 1);
let USADate = {yyyy:USAday.getFullYear(),mm : USAday.getMonth()+1,dd:USAday.getDate()};



// $( document ).ready(function() {
//   });


  let Demo02_2 = new Vue({
    el: '.Demo02-2',
    data: {
        object:{},Date:TwdayDate
    },
    mounted:function(){
        var self = this;
        $.ajax({
            type: "POST",
            url: "/SteveCard/Demo02",
            data : USADate,
            // dataType : 'JSON',
            success: function(Returndata) {
                self.object = Returndata;
            },
            error: function(Returndata) {
                self.object={Error:'Error'};
            },
            beforeSend:function(){
                $('.ajaxlaodmodal').modal('show');
            },
            complete:function(){
                $('.ajaxlaodmodal').modal('hide');
            }
        });
    }
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

