const request = require('request');

module.exports = class OrderPoll {
  constructor() {
    this.interval;
  }

  getOrders(){
    let orderList = {}

    request('http://localhost:3000/Uber/getList/', { json: true }, (err, res, body) => {
      console.log(body);
      if (err) {
        console.log("failed to place uber order");
        return -1;
      }
      (function(){
        return function(cb){

        };
      });

    });
    request('http://localhost:3000/SkipTheDishes/getList/', { json: true }, (err, res, body) => {
      console.log(body);
      if (err) {
        console.log("failed to place uber order");
        return -1;
      }
      orderList = {"home": 0};
    });
    console.log(orderList);
    return JSON.stringify(orderList);
  }

  timerStart(restaurantID){
    let msg = '';
    try{
      this.interval = setInterval((restaurantID)=>{
        let rand = Math.floor((Math.random() * 3) + 1);
        if(rand <= 1){
          request('http://localhost:3000/Uber/' + restaurantID + '/neworder', { json: true }, (err, res, body) => {
            if (err) {
              console.log("failed to place uber order");
              return -1;
            }
            console.log(res.body);
            //orders[body.order.id] = body.order;
          });
        }else{
          request('http://localhost:3000/SkipTheDishes/' + restaurantID + '/neworder', { json: true }, (err, res, body) => {
            if (err) {
              console.log("failed to place SkipDishes order");
              return -1;
            }
            console.log(res.body);
          //  orders[body.order.id] = body.order;
          });
        }
      }, 5000);
      msg = 'timer started success'
    }catch(err){
      console.log(err)
      msg= "timer start failed";
    }
    return msg;
  }

  stopTimer(){
    let msg = '';
    try{
      clearInterval(this.interval)
      msg = 'timer stop success'
    }catch(err){
      msg = "failed stopTimer";
    }
    return msg;
  }


}

// var businessService = {
//   pollOrders: function(req, res, restaurantID, next){
//     var _timr =  setTimeout(function(){
//       let rand = Math.floor((Math.random() * 3) + 1);
//       if(rand <= 1){
//         request('localhost:3000/Uber/' + restaurantID + '/neworder', { json: true }, (err, res, body) => {
//           if (err) {
//             next(err);
//           }
//           console.log(body.order.id);
//           orders[body.order.id] = body.order;
//         });
//       }else{
//         request('localhost:3000/SkipTheDishes/' + restaurantID + '/neworder', { json: true }, (err, res, body) => {
//           if (err) {
//             next(err);
//           }
//           console.log(body.order.id);
//           orders[body.order.id] = body.order;
//         });
//       }
//     }, 15000);
//
//     return _timr;
//   },
//   stopTimer: function(_timr){
//     clearInterval(_timr);
//   },
//   returnOrders: function(req, res, restaurantID, next){
//       return orders;
//   }
// }
