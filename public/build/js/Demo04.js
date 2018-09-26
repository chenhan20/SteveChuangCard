/*jshint esversion: 6 */

// let shoplistName=['營養','居家必備護理','肌膚美容保養系列','家庭','優植生活身體保養系列','美樂家純質精油','新品/特惠專區'];


let shoplistName = [];
let pagelocationArray = ['Tesla', 'Ferrari', 'Porsche', 'Benz', 'Bmw', 'Mazda', 'Honda'];
let pagelocationNum = 0; //預設第一頁
let lockChange = true; //防止快速轉換

let pageChange = which => {
    lockChange = false;
    let $body = window.opera ? document.compatMode == "CSS1Compat" ? $('html') : $('body') : $('html,body');
    $body.animate({
        scrollTop: $('.' + which).offset().top
    }, 1700, function () {
        lockChange = true;
    });
};

$('.onepagebar li').click(function () {
    if (lockChange && pagelocation != $(this)[0].innerText) {
        pagelocation = $(this)[0].innerText;
        pageChange(pagelocation);
    }
});

$(window).mousewheel(function (e) {
    pagelocationNum = pagelocationArray.indexOf(pagelocation);
    if (lockChange) {
        if (e.deltaY == 1) {
            if (pagelocationNum == 0) {
                pagelocation = pagelocationArray[pagelocationArray.length - 1];
                pageChange(pagelocation);
            } else {
                pagelocation = pagelocationArray[pagelocationNum - 1];
                pageChange(pagelocation);
            }
        } else {
            if (pagelocationNum == pagelocationArray.length - 1) {
                pagelocation = pagelocationArray[0];
                pageChange(pagelocation);
            } else {
                pagelocation = pagelocationArray[pagelocationNum + 1];
                pageChange(pagelocation);
            }
        }
    }
});

$(window).ready(function () {
    pagelocation = pagelocationArray[0];
    pageChange(pagelocationArray[0]);
    lockChange = true;
});

let Demo04 = new Vue({
    el: '.Demo04-1',
    data: {
        shoplistName: shoplistName
    },
    methods: {
        nickboxsend: function () {},
        chatsend: function () {
            self = this;
        }
    },
    mounted: function () {
        // $('.bouncing-loader').hide();

        var self = this;
        $('[data-toggle="tooltip"]').tooltip();
        $.ajax({
            type: "POST",
            url: "/SteveCard/Demo04",
            data: {},
            // dataType : 'JSON',
            success: function (shoplistName) {
                console.log('success');
                self.shoplistName = shoplistName;
            },
            error: function (Returndata) {
                console.log('error');
                // self.object={Error:'Error'};
            },
            beforeSend: function () {
                // $('.ajaxlaodmodal').modal('show');
                $('.bouncing-loader').show();
            },
            complete: function () {
                // $('.ajaxlaodmodal').modal('hide');
                $('.bouncing-loader').hide();
            }
        });
    }
});