'use strict';
var path = require('path');
var UberEats = require('../services/UberEatsFaker');
var SkipDishes = require('../services/SkipDishesFaker');


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
   }
};

module.exports = businessController;
