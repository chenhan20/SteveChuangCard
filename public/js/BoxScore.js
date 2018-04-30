/*jshint esversion: 6 */
let BoxScore = new Vue({
    el: '.BoxScore',
    data:{message:'hello vue',object:{}},
    mounted:function(){
        console.log(GameId);
        console.log(GameDate);
        console.log(HtriCode);
        console.log(VtriCode);
        self=this;
        // const GameId=$('.GameId').text();
        // const HtriCode=$('.HtriCode').text();
        // const VtriCode=$('.VtriCode').text();
        $.ajax({
            type: "POST",
            url: "/SteveCard/Demo02/BoxScore/",
            data : {'GameId':GameId,GameDate:GameDate,'HtriCode':HtriCode,'VtriCode':VtriCode},
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
        $('.Htable').show();
        $('.Vtable').hide();
    },   
     methods:{
        selectitem:function(event){
            console.log(event.toElement.classList.value);
            // $('.'+event.toElement.classList.value).toggleClass( "newClass", 1000 );
            if(event.toElement.classList.value=='Hselectitem'){
                $('.Htable').show();
                $('.Vtable').hide();
            }else{
                $('.Htable').hide();
                $('.Vtable').show();            
            }
        }
    }
});

