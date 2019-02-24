'use strict';

var path = require('path');
var UberEats = require('../services/UberEatsFaker');
var SkipDishes = require('../services/SkipDishesFaker');
var request = require('request')
var UBID = 0;
var SDID = 0;
var UberList = {};
var SkipDishesList = {};

var controllers = {
   sample: function(req, res) {
       var aboutInfo = {
           name: "Test",
           version: "v1.0.0"
       }
       res.json(aboutInfo);
   },

   uber_order: function(req, res) {
           UberEats.getOrders(req, res, UBID, UberList,function(err, order) {
               if (err)
               {
                res.send(err);
               }
           });
           UBID += 1;
           res.sendFile(path.join(__dirname, '../public', 'view.html'));  //debug
    },

    uber_update: function(req, res) {
      UberEats.update(req, res, req["params"]["orderID"], req["params"]["updateType"], UberList, function(err, order) {
            if (err){
             res.send(err);
            }
        });
        res.sendFile(path.join(__dirname, '../public', 'view.html'));  //debug
    },

    skipdishes_order: function(req, res) {
        SkipDishes.getOrders(req, res, SDID, SkipDishesList,function(err, order) {
            if (err)
            {
                res.send(err);
            }
        });
        SDID += 1;
    },

    skipdishes_update: function(req, res) {
        SkipDishes.update(req, res, req["params"]["orderID"], req["params"]["updateType"], SkipDishesList, function(err, order) {
            if (err){
             res.send(err);
            }
        });
    },

};

module.exports = controllers;
