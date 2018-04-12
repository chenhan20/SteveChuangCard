/*jshint esversion: 6 */
let DemoData;
let today=new Date();
let TodayDate = JSON.stringify({yyyy:today.getFullYear(),mm : today.getMonth()+1,dd:today.getDate()});

$( document ).ready(function() {
    // Handler for .ready() called.
    $.ajax({
        type: "POST",
        url: "/SteveCard/Demo02",
        data : TodayDate,
        dataType : 'JSON',
        success: function(data) {
            DemoData = data;
            console.log(DemoData);
        },
        error: function(data) {
            debugger;
            alert('error');
        }
    });
  });