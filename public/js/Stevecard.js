  /*jshint esversion: 6 */
  //bootstrap hover text setting
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(".gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('.gotop').fadeIn("fast");
    } else {
        $('.gotop').stop().fadeOut("fast");
    }
});
$('.goright').click(function(){
    alert('goright');
});
$('.goleft').click(function(){
    alert('goleft');
});


//email按鈕(複製功能)
$( ".Copyemail" ).click(function() {
    let email='a0911558945@gmail.com';
    copy(email);
    $('.copyemailmodal').modal('show');
});


//信件按鈕(發送訊息功能)
$( ".Sendemail" ).click(function() {
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
        data : $(".sendmailForm").serialize(),
        // dataType : 'json',
        success: function(msg) {
            alert(msg);
            if(msg=='success'){
                $('.sendemailmodal').modal('hide');
                $('.sucessmailmodal').modal('show');
            }else{
                $('.sendemailmodal').modal('hide');
                $('.errormailmodal').modal('show');
            }
        },
        error: function(msg) {
            $('.sendemailmodal').modal('hide');
            $('.errormailmodal').modal('show');
        }
    });
    return false;
}

