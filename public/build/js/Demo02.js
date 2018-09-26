"use strict";

/*jshint esversion: 6 */
// let DemoData;
var TwDay = new Date();
var TwdayDate = { yyyy: TwDay.getFullYear(), mm: TwDay.getMonth() + 1, dd: TwDay.getDate() };
var USAday = new Date();
USAday.setDate(USAday.getDate() - 1);
var USADate = { yyyy: USAday.getFullYear(), mm: USAday.getMonth() + 1, dd: USAday.getDate() };
//bootstrap hover text setting


var Demo02_2 = new Vue({
    el: '.Demo02-2',
    data: {
        object: {}, Date: TwdayDate
    },
    methods: {
        AddDate: function AddDate(event) {
            var self = this;
            USAday.setDate(USAday.getDate() + 1);
            USADate = { yyyy: USAday.getFullYear(), mm: USAday.getMonth() + 1, dd: USAday.getDate() };
            TwDay.setDate(TwDay.getDate() + 1);
            TwdayDate = { yyyy: TwDay.getFullYear(), mm: TwDay.getMonth() + 1, dd: TwDay.getDate() };
            self.Date = TwdayDate;
            $.ajax({
                type: "POST",
                url: "/SteveCard/Demo02",
                data: USADate,
                // dataType : 'JSON',
                success: function success(Returndata) {
                    self.object = Returndata;
                },
                error: function error(Returndata) {
                    self.object = { Error: 'Error' };
                },
                beforeSend: function beforeSend() {
                    // $('.ajaxlaodmodal').modal('show');
                    $('.bouncing-loader').show();
                    $('.Nba').hide();
                },
                complete: function complete() {
                    // $('.ajaxlaodmodal').modal('hide');
                    $('.bouncing-loader').hide();
                    $('.Nba').show();
                }
            });
        },
        LessDate: function LessDate(event) {
            var self = this;
            USAday.setDate(USAday.getDate() - 1);
            USADate = { yyyy: USAday.getFullYear(), mm: USAday.getMonth() + 1, dd: USAday.getDate() };
            TwDay.setDate(TwDay.getDate() - 1);
            TwdayDate = { yyyy: TwDay.getFullYear(), mm: TwDay.getMonth() + 1, dd: TwDay.getDate() };
            self.Date = TwdayDate;
            $.ajax({
                type: "POST",
                url: "/SteveCard/Demo02",
                data: USADate,
                // dataType : 'JSON',
                success: function success(Returndata) {
                    self.object = Returndata;
                },
                error: function error(Returndata) {
                    self.object = { Error: 'Error' };
                },
                beforeSend: function beforeSend() {
                    // $('.ajaxlaodmodal').modal('show');
                    $('.bouncing-loader').show();
                    $('.Nba').hide();
                },
                complete: function complete() {
                    $('.bouncing-loader').hide();
                    $('.Nba').show();
                    // $('.ajaxlaodmodal').modal('hide');
                }
            });
        },
        //比賽詳細資訊
        GameDetail: function GameDetail(event) {
            //取得點選比賽主場的隊伍(查詢比賽資訊用)
            // alert(event.currentTarget.querySelectorAll(".hTeam")[0].innerText); 
            var GameId = event.currentTarget.querySelectorAll(".gameId")[0].innerText;
            var VtriCode = event.currentTarget.querySelectorAll(".vTeamtriCode")[0].innerText;
            var HtriCode = event.currentTarget.querySelectorAll(".hTeamtriCode")[0].innerText;
            var GameDate = ''.concat(USADate.yyyy, USADate.mm < 10 ? '0' : '', USADate.mm, USADate.dd < 10 ? '0' : '', USADate.dd);
            // $.get( "/SteveCard/BoxScore/"+hTeam);
            // console.log(VtriCode);
            // console.log(HtriCode);  
            window.location = "/SteveCard/Demo02/BoxScore/" + VtriCode + HtriCode + GameId + GameDate;
        },
        bg_css: function bg_css(Logo) {
            return { 'background-image': "url(" + Logo + ")" };
        }
    },
    mounted: function mounted() {
        // $('.bouncing-loader').hide();

        var self = this;
        $('[data-toggle="tooltip"]').tooltip();
        $.ajax({
            type: "POST",
            url: "/SteveCard/Demo02",
            data: USADate,
            // dataType : 'JSON',
            success: function success(Returndata) {
                self.object = Returndata;
            },
            error: function error(Returndata) {
                self.object = { Error: 'Error' };
            },
            beforeSend: function beforeSend() {
                // $('.ajaxlaodmodal').modal('show');
                $('.bouncing-loader').show();
            },
            complete: function complete() {
                // $('.ajaxlaodmodal').modal('hide');
                $('.bouncing-loader').hide();
            }
        });
    }
});