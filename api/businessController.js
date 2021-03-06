'use strict';
var path = require('path');
var businessService = require('../services/businessService');
var OrderPoll = new businessService();
const restaurantID = '1234';
var _timr;
var businessController = {
   sample: function(req, res) {
       var aboutInfo = {
           name: "Test",
           version: "v1.0.0"
       }
       res.json(aboutInfo);
   },

   sendIndex: function(req, res){
     res.sendFile(path.join(__dirname, '../public', 'view.html'));
   },

   startPoll: function(req, res){
     res.send(OrderPoll.timerStart(restaurantID));
   },
   
   showOrders: function(req, res){
     res.setHeader('Content-Type', 'application/json');
     var orders  = OrderPoll.getOrders();
     res.send(orders);
   },

   stahp: function(req, res){
     res.send(OrderPoll.stopTimer());
   }, 

  storeFront: function(req, res){
    res.sendFile(path.join(__dirname, '../public', 'storefront.html'));
  },

};

module.exports = businessController;
