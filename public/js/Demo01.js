let create_cards = function (){
  const cards= [];
  for(let suit of ['M','C','D','S'])
    for(let value=1;value<=13;value++)
      cards.push({suit,value});
  return cards;
}

let create_cards_new = function(){
  const suit=[];
  /**
   * 紅桃 : \u2665
  鑽石 : \u2666
  梅花 : \u2663
  黑桃 : \u2660
   */
}

let cards_filter = function(cards,suit,value){
    return cards.filter(c => c.suit==suit && c.value>value);
}
let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}

let getRandomValue= function(cards){
    let randomNum=getRandomInt(13);
    return cards.filter(c => c.suit=='M' && c.value==randomNum);
  }


let Demo01 = new Vue({
  el: '.Demo01',
  data: {
    message:cards_filter(create_cards(),'M',10),
    rendom:getRandomValue(create_cards())
  },
  methods: {
    Create:function(event){
      alert('123123');
    }
  }
})

