'use strict';

var UberEats = require('../services/UberEatsFaker');
var SkipDishes = require('../services/SkipDishesFaker');


var controllers = {
   sample: function(req, res) {
       var aboutInfo = {
           name: "Test",
           version: "v1.0.0"
       }
       res.json(aboutInfo);
   },
   uber_order: function(req, res) {
           UberEats.getOrders(req, res, function(err, order) {
               if (err)
                   res.send(err);
               res.json(order);
           });
       },
    skipdishes_order: function(req, res) {
        SkipDishes.getOrders(req, res, function(err, order) {
            if (err)
                res.send(err);
            res.json(order);
        });
    },
};

module.exports = controllers;
