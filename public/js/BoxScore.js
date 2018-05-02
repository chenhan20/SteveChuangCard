/*jshint esversion: 6 */
let BoxScore = new Vue({
    el: '.BoxScore',
    data:{object:{}},
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
                self.object={Error:'Error'};
            },
            beforeSend:function(){
                $('.ajaxlaodmodal').modal('show');
            },
            complete:function(){
                $('.ajaxlaodmodal').modal('hide');
            }
        });
        $('.Box').show(500);
        $('.Score').hide();
        $('.Htable').show(500);
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
                $('.Htable').show(500);
                $('.Vtable').hide(500);
            }else{
                $('.Hselectitem').removeClass( "SelectClass" );
                $('.Vselectitem').addClass( "SelectClass" );
                $('.Htable').hide(500);
                $('.Vtable').show(500);            
            }
        },
        selectBox:function(event){
            $('.Box').show(500);
            $('.Score').hide(500);
        },
        selectScore:function(event){
            $('.Box').hide(500);
            $('.Score').show(500);
        },
        image_css:function(Logo){
            return {'background-image': `url(${Logo})`};
        }
    },
    computed: {
        // cmpDetailNum:function(){
        //     debugger;
        //   return this.object.ScoreDetailData[0].length;
        // }
    }
});

