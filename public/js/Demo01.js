let create_cards = function (){
  const cards= [];
  for(let suit of ['\u2665','\u2666','\u2663','\u2660'])
    for(let value=1;value<=13;value++)
      cards.push({suit,value});
  return cards;
}

let create_cards_new = function(){
  // const suit={'H':'\u2665','C':'\u2666','D':'\u2663','S':'\u2660'};
  // const value={'1':'A','11':'J','12':'Q','13':'K'};
  // for(let i=2;i<=10;i++)
  //   value[i]=i;
  // return  value[c.value] + suit[c.suit];
}
  /**
   * 塞進陣列 
   * 紅桃 : \u2665
   * 鑽石 : \u2666
   * 梅花 : \u2663
   * 黑桃 : \u2660
   */
let suitArray=['\u2665','\u2666','\u2663','\u2660']

let cards_filter = function(cards,suit,value){
    return cards.filter(c => c.suit==suit && c.value>value);
}
let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
let getRandomSuit = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let getSuitAndValue = function(cards){
  let total = '';
  debugger;
  for(let add of cards){
    total += (add.suit + add.value);
  }
  return total;
}

let getRandomValue= function(cards){
    let randomNum=getRandomInt(13);
    let randomsuit=getRandomSuit(3);
    return cards.filter(c => c.suit==suitArray[randomsuit] && c.value==randomNum);
  }
let getWhowin=function(You,Computer){

}
//==============VueJs渲染=============
let Demo01 = new Vue({
  el: '.Demo01',
  data: {
    message:'',
    title_1:'',
    title_2:'',
    You:'',
    Computer:'',
    rendom:getRandomValue(create_cards())
  },
  methods: {
    Create:function(event){
      // cards_filter(create_cards(),'M',10)
      // let total = '';
      // let cards=create_cards();
      // for(let i=0;i<ards.length;i++){
      //   total += (cards[i].suit + cards[i].value);
      // }
      let cards=create_cards();
      this.title_1 = '產生一副撲克牌';
      this.message = getSuitAndValue(cards);
    },
    Clear:function(event){
      // cards_filter(create_cards(),'M',10)
      this.title_1 = '';
      this.title_2 = '';
      this.message = '';
    },
    Random1:function(event){
      // cards_filter(create_cards(),'M',10)
    let cards=create_cards();
    this.title_1 = '產生隨機一張撲克牌';
    this.message = getSuitAndValue(getRandomValue(cards));
    },
    Bigsmall:function(event){
      let cards=create_cards();
      let You=getSuitAndValue(getRandomValue(cards));
      let Computer=getSuitAndValue(getRandomValue(cards));
      getSuitAndValue(getRandomValue(cards))
      this.title_2 = '比大小';
      this.You = '你 : '+ You;
      this.Computer = '電腦 : '+ Computer;
      this.Whowin = getWhowin(You,Computer);
    }
  }
})

