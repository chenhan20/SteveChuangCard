/*jshint esversion: 6 */
const row1 = ['總監1', '0', '$6,000', '100%', '50%'];
const row2 = ['總監2', '1,000', '$12,000', '100%', '50%'];
const row3 = ['總監3', '2,500', '$18,000', '100%', '50%'];
const row4 = ['總監4', '5,000', '$24,000', '100%', '100%'];
const row5 = ['總監5', '7,500', '$30,000', '100%', '100%'];
const row6 = ['總監6', '10,000', '$36,000', '100%', '100%'];
const row7 = ['總監7', '12,500', '$42,000', '100%', '100%'];
const row8 = ['總監8', '15,000', '$48,000', '100%', '100%'];
const row9 = ['總監9', '17,500', '$66,000', '100%', '100%'];
const row10 = ['資深總監1', '20,000', '$132,000', '100%', '100%'];
const total = ['Total', '---------', '$414,000', '$414,000', '$207,000'];
const tabledata = { row1, row2, row3, row4, row5, row6, row7, row8, row9, row10 };
const totaldata = { total };

let SelectTotal = [];

let melaApp = new Vue({
    el: '.melaApp',
    data: {
        page: 'Money',
        tabledata: tabledata,
        totaldata: totaldata,
        showBox: 'Nopage',
        TotalMoney: '',
        TotalMoneyNumber: 0,
        TotalOperator: 0,
        Totalconsumer: 0,
        TotalClass: '' },
    methods: {
        money: function (event) {
            self = this;
            self.page = 'Money';
        },
        team: function (event) {
            self = this;
            self.page = 'Team';
            let $body = window.opera ? document.compatMode == "CSS1Compat" ? $('html') : $('body') : $('html,body');
            $body.animate({
                scrollTop: $('.item').offset().top
            }, 500, function () {
                // lockChange=true;
                //控制月份顯示字詞位置動畫
                $('.OneMonth').animate({
                    left: '70%', top: '17%' }, { duration: 1000 });
                $('.TwoMonth').animate({
                    left: '70%', top: '34%' }, { duration: 1000 });
                $('.ThreeMonth').animate({
                    left: '70%', top: '51%' }, { duration: 1000 });
                $('.FourMonth').animate({
                    left: '70%', top: '68%' }, { duration: 1000 });
                $('.FiveMonth').animate({
                    left: '70%', top: '85%' }, { duration: 1000 });
                $('.fa-calendar-check').animate({
                    left: '55%', top: '50%' }, { duration: 1000 });
            });
        },
        one: function (event) {
            self = this;
            self.page = 'One';
        },
        two: function (event) {
            self = this;
            self.page = 'Two';
        },
        three: function (event) {
            self = this;
            self.page = 'Three';
        },
        four: function (event) {
            self = this;
            self.page = 'Four';
        },
        five: function (event) {
            self = this;
            self.page = 'Five';
        },
        showBoxP1Click: function (event) {
            self = this;
            self.showBox = 'P1';
            //重製這些值 否則會殘留
            self.TotalClass = '';
            self.TotalMoney = '';
            self.TotalOperator = 0;
            self.Totalconsumer = 0;
            SelectTotal = [];
        },
        cancelBox: function (event) {
            self = this;
            self.showBox = 'Nopage';
        },
        NextBox: function (event) {
            self = this;
            self.showBox = 'P2';
        },
        boxSelect: function (event) {
            self = this;
            let checked = event.toElement.checked;
            let selectText = event.currentTarget.id;
            if (checked) {
                SelectTotal.push(selectText);
            } else {
                SelectTotal.splice(SelectTotal.indexOf(selectText), 1);
            }
            Calculation(self, SelectTotal);
        }
    }
});

let Calculation = (self, SelectTotal) => {
    self.TotalMoneyNumber = 0;

    for (let value of SelectTotal) {
        if (SelectTotal.length == 1 && value != '20consumer') {
            self.TotalClass = '請先勾選消費者 否則無法達成目標';
            self.TotalMoney = '';
            return;
        }
        switch (value) {
            case '20consumer':
                self.Totalconsumer += 20;
                self.TotalMoneyNumber += 46666;
                break;
            case 'Operators_1':
                self.TotalOperator += 1;
                break;
            case 'Operators_2':
                self.TotalOperator += 1;
                // self.TotalMoneyNumber += 166712;
                break;
            case 'Operators_3':
                self.TotalOperator += 1;
                // self.TotalMoneyNumber += 329994;
                break;
            case 'Operators_4':
                self.TotalOperator += 1;
                // self.TotalMoneyNumber += 550072;
                break;
        }
    }

    computeClass(self);

    // self.TotalClass = '總監3';
    // self.TotalMoneyNumber = 43333;
};

//格式化金額
let MoneyFormat = Money => {
    let Format;
    Format = '$' + parseInt(Money).toLocaleString('en-US');
    return Format;
};

//計算可升到的階級
let computeClass = self => {

    /**
     * 升階條件   依據兩個大標準去計算
     * 1.親推人數
     * 2.組織點數(七代PEG)    
     */

    self.TotalMoney = MoneyFormat(self.TotalMoneyNumber);
};