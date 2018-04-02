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

$( ".email" ).click(function() {
    let email='a0911558945@gmail.com';
    copy(email);
    $('.emailmodal').modal('show');
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

