'use strict';

/*jshint esversion: 6 */
var create_cards = function create_cards() {
  var cards = [];
  var _arr = ['\u2665', '\u2666', '\u2663', '\u2660'];
  for (var _i = 0; _i < _arr.length; _i++) {
    var suit = _arr[_i];
    for (var value = 1; value <= 13; value++) {
      cards.push({ suit: suit, value: value });
    }
  }return cards;
};

var create_cards_new = function create_cards_new() {
  // const suit={'H':'\u2665','C':'\u2666','D':'\u2663','S':'\u2660'};
  // const value={'1':'A','11':'J','12':'Q','13':'K'};
  // for(let i=2;i<=10;i++)
  //   value[i]=i;
  // return  value[c.value] + suit[c.suit];
};
/**
 * 塞進陣列 
 * 紅桃 : \u2665
 * 鑽石 : \u2666
 * 梅花 : \u2663
 * 黑桃 : \u2660
 */
var suitArray = ['\u2665', '\u2666', '\u2663', '\u2660'];

var cards_filter = function cards_filter(cards, suit, value) {
  return cards.filter(function (c) {
    return c.suit == suit && c.value > value;
  });
};
var getRandomInt = function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};
var getRandomSuit = function getRandomSuit(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var getSuitAndValue = function getSuitAndValue(cards) {
  var total = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var add = _step.value;

      total += add.suit + add.value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return total;
};

var getRandomValue = function getRandomValue(cards) {
  var randomNum = getRandomInt(13);
  var randomsuit = getRandomSuit(3);
  return cards.filter(function (c) {
    return c.suit == suitArray[randomsuit] && c.value == randomNum;
  });
};
/**====================================================================================================
 * 回傳排組的排序 
 * @param  Rule 傳入要使用的規則 Ex:比大小(黑桃ace最大)
 * @param  cards 傳入牌組 回傳此規則排組的value
 * ====================================================================================================
 */
var getPokerRule = function getPokerRule(Rule, cards) {
  if (Rule == 'Bigsmall') {
    // debugger;
  }
  return '';
};
var getWhowin = function getWhowin(cards, You, Computer) {
  getPokerRule('Bigsmall', cards);
  You.substr(1);
  return '';
};
//==============VueJs渲染=============
var Demo01 = new Vue({
  el: '.Demo01',
  data: {
    message: '',
    title_1: '',
    title_2: '',
    You: '',
    Computer: '',
    whowin: '',
    rendom: getRandomValue(create_cards())
  },
  methods: {
    Create: function Create(event) {
      // cards_filter(create_cards(),'M',10)
      // let total = '';
      // let cards=create_cards();
      // for(let i=0;i<ards.length;i++){
      //   total += (cards[i].suit + cards[i].value);
      // }
      var cards = create_cards();
      this.title_1 = '產生一副撲克牌';
      this.message = getSuitAndValue(cards);
    },
    Clear: function Clear(event) {
      // cards_filter(create_cards(),'M',10)
      this.title_1 = '';
      this.title_2 = '';
      this.message = '';
    },
    Random1: function Random1(event) {
      // cards_filter(create_cards(),'M',10)
      var cards = create_cards();
      this.title_1 = '產生隨機一張撲克牌';
      this.message = getSuitAndValue(getRandomValue(cards));
    },
    Bigsmall: function Bigsmall(event) {
      var cards = create_cards();
      var You = getSuitAndValue(getRandomValue(cards));
      var Computer = getSuitAndValue(getRandomValue(cards));
      // getSuitAndValue(getRandomValue(cards))
      this.title_2 = '比大小';
      this.You = '你 : ' + You;
      this.Computer = '電腦 : ' + Computer;
      this.Whowin = getWhowin(cards, You, Computer);
    }
  }
});