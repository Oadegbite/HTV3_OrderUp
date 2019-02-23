'use strict';

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
};

module.exports = businessController;
