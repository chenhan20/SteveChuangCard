//   // await/async  JSHint 會出現錯誤 故先讓他ignore掉這一段
/* jshint ignore:start */

let num = [1,2,3,4,5,6,7,8,9,10];



let sleep = function(time){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve();
        },time);
    })
};
let start =async function() {
    try {
       for(v of num){
            console.log('第'+v+'次');
            console.log('start');
            await sleep(1000);
            console.log('end');
        }
    }catch(err){
        console.log(err);
    }
};

// start();

module.exports = start;

  /* jshint ignore:end */
