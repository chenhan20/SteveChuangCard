  /*jshint esversion: 6 */
  //bootstrap hover text setting

{

    let keepPorjectData = {};
    let steveCV = new Vue({
        el: '.steveCV',
        data: {
            PROJECT: keepPorjectData,
            totalSeniority: ''
        },
        mounted: function () {
            var self = this;
            $.ajax({
                type: "POST",
                url: "/SteveCard/initData",
                data: {},
                // dataType : 'JSON',
                success: function (data) {
                    self.PROJECT = data.PROJECT;
                    let total = 0;
                    $.each(data.PROJECT, function (index, project) {
                        if (project.isWork) {
                            let diffDay = diffDayFunc(project.startDate, project.endDate);
                            total += diffDay;
                        }
                    });
                    self.totalSeniority = Math.round(total / 365 * 100) / 100 + 'Year';
                }
            });
        },
        methods: {
            //email按鈕(複製功能)
            copyEmail: function(event){
                let email = 'a0911558945@gmail.com';
                copy(email);
                $('.copyemailmodal').modal('show');
            },
            //信件按鈕(發送訊息功能)
            sendEmail: function(event){
                $('.sendemailmodal').modal('show');
            }
        },
        filters: {
            dateFilter: function (startDate, endDate) {
                endDate = endDate == '' ? "Now" : endDate.substring(0, 7);
                return startDate.substring(0, 7) + "~" + endDate;
            },
            contentTextFilter: function (contentText) {
                return contentText;
            },
            calculationMonthDayFilter: function (start, end) {
                let diffDay = diffDayFunc(start, end);
                let month = Math.round(diffDay / 30);
                let day = diffDay % 30;
                return ` ${month} Month ${day} Days`;
            },
            calculationDayFilter: function (start, end) {
              let diffDay = diffDayFunc(start, end);
              return `${diffDay}`;
            }
        }
    });

    let diffDayFunc = (start, end) => {
        let startDate = new Date(start);
        let endDate = end == '' ? new Date() : new Date(end);
        return Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    };



    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(".gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            // $('.gotop').fadeIn("fast");
            $('.gotop').addClass('is-visible');
        } else {
            // $('.gotop').stop().fadeOut("fast");
        }
    });
    $('.goright').click(function () {
        alert('goright');
    });
    $('.goleft').click(function () {
        alert('goleft');
    });

    /**
     * 
     * @param {String} s 傳入要複製的文字
     */
    function copy(s) {
        $('body').append('<textarea id="clip_area"></textarea>');

        var clip_area = $('#clip_area');

        clip_area.text(s);
        clip_area.select();

        document.execCommand('copy');

        clip_area.remove();
    }


    /** 
     * Ajax
     */
    function PostData() {
        $.ajax({
            type: "POST",
            url: "/SteveCard/sendmail",
            data: $(".sendmailForm").serialize(),
            // dataType : 'json',
            success: function (msg) {
                if (msg == 'success') {
                    $('.sendemailmodal').modal('hide');
                    $('.sucessmailmodal').modal('show');
                } else {
                    $('.sendemailmodal').modal('hide');
                    $('.errormailmodal').modal('show');
                }
            },
            error: function (msg) {
                $('.sendemailmodal').modal('hide');
                $('.errormailmodal').modal('show');
            }
        });
        return false;
    }
}