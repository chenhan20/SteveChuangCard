/*jshint esversion: 6 */
let BoxScore = new Vue({
    el: '.BoxScore',
    data:{message:'hello vue',object:{}},
    mounted:function(){
        console.log(GameId);
        console.log(HtriCode);
        console.log(VtriCode);
        self=this;
        // const GameId=$('.GameId').text();
        // const HtriCode=$('.HtriCode').text();
        // const VtriCode=$('.VtriCode').text();
        $.ajax({
            type: "POST",
            url: "/SteveCard/Demo02/BoxScore/",
            data : {'GameId':GameId,'HtriCode':HtriCode,'VtriCode':VtriCode},
            // dataType : 'JSON',
            success: function(Returndata) {
                // debugger;
                self.object = Returndata;
            },
            error: function(Returndata) {
                // debugger;
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

