/*jshint esversion: 6 */
// let DemoData;
let TwDay=new Date();
let TwdayDate = {yyyy:TwDay.getFullYear(),mm : TwDay.getMonth()+1,dd:TwDay.getDate()};
let USAday = new Date();
USAday.setDate(USAday.getDate() - 1);
let USADate = {yyyy:USAday.getFullYear(),mm : USAday.getMonth()+1,dd:USAday.getDate()};
//bootstrap hover text setting
$(document).ready(function(){
});

  let Demo02_2 = new Vue({
    el: '.Demo02-2',
    data: {
        object:{},Date:TwdayDate
    },
    methods:{
        AddDate:function(event){
            let self = this;
            USAday.setDate(USAday.getDate() + 1);
            USADate = {yyyy:USAday.getFullYear(),mm : USAday.getMonth()+1,dd:USAday.getDate()};
            TwDay.setDate(TwDay.getDate() + 1);
            TwdayDate = {yyyy:TwDay.getFullYear(),mm : TwDay.getMonth()+1,dd:TwDay.getDate()};
            self.Date=TwdayDate;
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
        },
        LessDate:function(event){
            let self = this;
            USAday.setDate(USAday.getDate() - 1);
            USADate = {yyyy:USAday.getFullYear(),mm : USAday.getMonth()+1,dd:USAday.getDate()};
            TwDay.setDate(TwDay.getDate() - 1);
            TwdayDate = {yyyy:TwDay.getFullYear(),mm : TwDay.getMonth()+1,dd:TwDay.getDate()};
            self.Date=TwdayDate;
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
        },
        //比賽詳細資訊
        GameDetail:function(event){
            //取得點選比賽主場的隊伍(查詢比賽資訊用)
            // alert(event.currentTarget.querySelectorAll(".hTeam")[0].innerText); 
            let GameId =  event.currentTarget.querySelectorAll(".gameId")[0].innerText;
            let VtriCode =  event.currentTarget.querySelectorAll(".vTeamtriCode")[0].innerText;
            let HtriCode =  event.currentTarget.querySelectorAll(".hTeamtriCode")[0].innerText;
            let GameDate = ''.concat(USADate.yyyy,(USADate.mm<10 ? '0' : ''),USADate.mm,USADate.dd);
            // $.get( "/SteveCard/BoxScore/"+hTeam);
            // console.log(VtriCode);
            // console.log(HtriCode);
            window.location = "/SteveCard/Demo02/BoxScore/"+VtriCode+HtriCode+GameId+GameDate;
        },
        bg_css:function(Logo){
            return {'background-image': `url(${Logo})`};
        }
},
    mounted:function(){
        var self = this;
        $('[data-toggle="tooltip"]').tooltip();   
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


