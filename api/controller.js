'use strict';

var UberEats = require('../services/UberEatsFaker');
var SkipDishes = require('../services/SkipDishesFaker');
var UBID = 0;
var SDID = 0;

var controllers = {
   sample: function(req, res) {
       var aboutInfo = {
           name: "Test",
           version: "v1.0.0"
       }
       res.json(aboutInfo);
   },

   uber_order: function(req, res) {
           UberEats.getOrders(req, res, UBID,function(err, order) {
               if (err)
               {
                res.send(err);
               }
           });
           UBID += 1;
    },

    uber_update: function(req, res) {
        UberEats.setInProgress(req, res, req["params"]["orderID"], req["params"]["updateType"], function(err, order) {
            if (err){
             res.send(err);
            }
        });
    },

    skipdishes_order: function(req, res) {
        SkipDishes.getOrders(req, res, SDID, function(err, order) {
            if (err)
            {
                res.send(err);
            }
        });
        SDID += 1;
    },

    skipdishes_update: function(req, res) {
        SkipDishes.setInProgress(req, res, req["params"]["orderID"], req["params"]["updateType"],function(err, order) {
            if (err){
             res.send(err);
            }
        });
    },
    
};

module.exports = controllers;
