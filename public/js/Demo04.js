/*jshint esversion: 6 */


let shoplistName=['營養','居家必備護理','肌膚美容保養系列','家庭','優植生活身體保養系列','美樂家純質精油','新品/特惠專區'];




let Demo04 = new Vue({
    el: '.Demo04-1',
    data: {
        shoplistName:shoplistName
    },
    methods:{
        nickboxsend:function(){
            
        },
        chatsend:function(){
            self= this;

        }
    },
    mounted:function(){
        // $('.bouncing-loader').hide();
        
        var self = this;
        $('[data-toggle="tooltip"]').tooltip();   
        $.ajax({
            type: "POST",
            url: "/SteveCard/Demo04",
            data : {},
            // dataType : 'JSON',
            success: function(Returndata) {
                console.log('success');
                // self.object = Returndata;
            },
            error: function(Returndata) {
                console.log('error');
                // self.object={Error:'Error'};
            },
            beforeSend:function(){
                // $('.ajaxlaodmodal').modal('show');
                $('.bouncing-loader').show();
            },
            complete:function(){
                // $('.ajaxlaodmodal').modal('hide');
                $('.bouncing-loader').hide();
            }
        });
    }
  });