/*jshint esversion: 6 */
const row1 =['總監1','6,000','100%','50%'];
const row2 =['總監2','12,000','100%','50%'];
const row3 =['總監3','18,000','100%','50%'];
const row4 =['總監4','24,000','100%','100%'];
const row5 =['總監5','30,000','100%','100%'];
const row6 =['總監6','36,000','100%','100%'];
const row7 =['總監7','42,000','100%','100%'];
const row8 =['總監8','48,000','100%','100%'];
const row9 =['總監9','66,000','100%','100%'];
const row10 =['資深總監','132,000','100%','100%'];
const total =['Total','414,000','414,000','207,000'];
const tabledata = {row1,row2,row3,row4,row5,row6,row7,row8,row9,row10,total};
let melaApp = new Vue({
    el: '.melaApp',
    data:{massege:'gggggg',page:'Money',tabledata:tabledata},
    methods:{
        money:function(event){
            self=this;
            self.page='Money';
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
        }
    }
});