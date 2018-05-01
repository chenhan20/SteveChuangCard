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
        $('.Hselectitem').addClass( "SelectClass" );
    },   
     methods:{
        selectBoxItem:function(event){
            console.log(event.toElement.classList.value);
            // $('.'+event.toElement.classList.value).toggleClass( "newClass" );
            if(event.toElement.classList.value=='Hselectitem'){
                $('.Hselectitem').addClass( "SelectClass" );
                $('.Vselectitem').removeClass( "SelectClass" );
                $('.Htable').show();
                $('.Vtable').hide();
            }else{
                $('.Hselectitem').removeClass( "SelectClass" );
                $('.Vselectitem').addClass( "SelectClass" );
                $('.Htable').hide();
                $('.Vtable').show();            
            }
        },
        selectitem:function(event){
            console.log(event.toElement.classList[0]);
            // debugger;
            // if(event.toElement.classList[0]=='Scoreitem'){
            //     $('.selectItemScore').addClass( "selectItem" );
            //     $('.selectItemBox').removeClass( "selectItem" );
            // }else{
            //     $('.selectItemScore').removeClass( "selectItem" );
            //     $('.selectItemBox').addClass( "selectItem" );
            // }
        },
        image_css:function(Logo){
            return {'background-image': `url(${Logo})`};
        }
    }
});

