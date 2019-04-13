  /*jshint esversion: 6 */
  //bootstrap hover text setting

  $(function () {
      const PROJECT = {
          'CARELINE': {
              name: 'CARELINE',
              friendlyname: '英國凱萊後台開發案',
              startDate: '2018/12/17',
              endDate: '',
              YearText: ''
          },
          'WISTRON': {
              name: 'WISTRON',
              friendlyname: '緯創軟體(誠品開發案)',
              startDate: '2018/05/01',
              endDate: '2018/12/14',
              YearText: ''
          },
          'MARYA_TWM_MAINTAIN_2': {
              name: 'MARYA_TWM_MAINTAIN_2',
              friendlyname: 'POS維運專案',
              startDate: '2017/11/01',
              endDate: '2018/04/31',
              YearText: ''
          },
          'MARYA_TWM_STRATUS': {
              name: 'MARYA_TWM_STRATUS',
              friendlyname: 'Struts下架專案',
              startDate: '2017/07/01',
              endDate: '2017/10/31',
              YearText: ''
          },
          'MARYA_TWM_MAINTAIN_1': {
              name: 'MARYA_TWM_MAINTAIN_1',
              friendlyname: 'POS系統維運專案',
              startDate: '2017/02/01',
              endDate: '2017/06/31',
              YearText: ''
          },
          'ARMY_ONLINE': {
              name: 'ARMY_ONLINE',
              friendlyname: '國軍ONLINE',
              startDate: '2016/10/01',
              endDate: '2017/02/01',
              YearText: ''
          },
          'MARYA_TWM_ADD_NUM': {
              name: 'MARYA_TWM_ADD_NUM',
              friendlyname: 'POS店點擴碼專案',
              startDate: '2016/04/01',
              endDate: '2016/10/01',
              YearText: ''
          },
          'MARYA_TWM_MONEY_COMMISSION': {
              name: 'MARYA_TWM_MONEY_COMMISSION',
              friendlyname: '佣金系統維運專案',
              startDate: '2015/07/01',
              endDate: '2016/04/01',
              YearText: ''
          },
      };
      data = {
          PROJECT: PROJECT
      };


      let steveCV = new Vue({
          el: '.steveCV',
          data: data,
          method: {},
          filters: {
              dateFilter: function (startDate, endDate) {
                  endDate = endDate == '' ? "Now" : endDate.substring(0, 7);
                  return startDate.substring(0, 7) + "~" + endDate;
              }
          },
          mounted: function () {}
      });





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


      //email按鈕(複製功能)
      $(".Copyemail").click(function () {
          let email = 'a0911558945@gmail.com';
          copy(email);
          $('.copyemailmodal').modal('show');
      });


      //信件按鈕(發送訊息功能)
      $(".Sendemail").click(function () {
          $('.sendemailmodal').modal('show');
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
                  alert(msg);
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
  });