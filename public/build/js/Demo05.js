/*jshint esversion: 6 */
const row1 =['總監1','0','$6,000','100%','50%'];
const row2 =['總監2','1,000','$12,000','100%','50%'];
const row3 =['總監3','2,500','$18,000','100%','50%'];
const row4 =['總監4','5,000','$24,000','100%','100%'];
const row5 =['總監5','7,500','$30,000','100%','100%'];
const row6 =['總監6','10,000','$36,000','100%','100%'];
const row7 =['總監7','12,500','$42,000','100%','100%'];
const row8 =['總監8','15,000','$48,000','100%','100%'];
const row9 =['總監9','17,500','$66,000','100%','100%'];
const row10 =['資深總監1','20,000','$132,000','100%','100%'];
const total =['Total','---------','$414,000','$414,000','$207,000'];
const tabledata = {row1,row2,row3,row4,row5,row6,row7,row8,row9,row10};
const totaldata = {total};


let melaApp = new Vue({
    el: '.melaApp',
    data:{page:'Money',tabledata:tabledata,totaldata:totaldata,showBox:'Nopage'},
    methods:{
        money:function(event){
            self=this;
            self.page='Money';
        },
        team:function(event){
            self=this;
            self.page='Team';
            let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
            $body.animate({
                scrollTop: $('.item').offset().top
            }, 500, function() {
                // lockChange=true;
                $('.OneMonth').animate({
                    left: '70%',top:'20%'}, {duration: 1000});
                $('.TwoMonth').animate({
                    left: '70%',top:'35%'}, {duration: 1000});
                $('.ThreeMonth').animate({
                    left: '70%',top:'50%'}, {duration: 1000});
                $('.FourMonth').animate({
                    left: '70%',top:'65%'}, {duration: 1000});
                $('.FiveMonth').animate({
                    left: '70%',top:'80%'}, {duration: 1000});
});
 
          },
        one:function(event){
            self=this;
            self.page='One';
        },
        two:function(event){
            self=this;
            self.page='Two';
        },
        three:function(event){
            self=this;
            self.page='Three';
        },
        four:function(event){
            self=this;
            self.page='Four';
        },
        five:function(event){
            self=this;
            self.page='Five';
        },
        showBoxP1Click:function(event){
            self=this;
            self.showBox='P1';

        },
        cancelBox:function(event){
            self=this;
            self.showBox='Nopage';
        },
        NextBox:function(event){
            self=this;
            self.showBox='P2';
        }
    }
});