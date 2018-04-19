/*jshint esversion: 6 */
let BoxScore = new Vue({
    el: '.BoxScore',
    data:{message:'hello vue'},
    mounted:function(){
        self=this;
        const GameId=$('.GameId').text();
        $.ajax({
            type: "POST",
            url: "/SteveCard/BoxScore/",
            data : {'GameId':GameId},
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

