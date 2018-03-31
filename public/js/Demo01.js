let create_cards = function (){
  const cards= [];
  for(let suit of ['\u2665','\u2666','\u2663','\u2660'])
    for(let value=1;value<=13;value++)
      cards.push({suit,value});
  return cards;
}

let create_cards_new = function(){
  const suit=[];
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

//==============VueJs渲染=============
let Demo01 = new Vue({
  el: '.Demo01',
  data: {
    message:'',
    title:'',
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
      this.title = '產生一副撲克牌';
      this.message = getSuitAndValue(cards);
    },
    Clear:function(event){
      // cards_filter(create_cards(),'M',10)
      this.title = '';
      this.message = '';
    },
    Random1:function(event){
      // cards_filter(create_cards(),'M',10)
    let cards=create_cards();
    this.title = '產生隨機一張撲克牌';
    this.message = getSuitAndValue(getRandomValue(cards));
    }
  }
})

