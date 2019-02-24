'use strict';

var path = require('path');
var UberEats = require('../services/UberEatsFaker');
var SkipDishes = require('../services/SkipDishesFaker');
var request = require('request')
var UBID = 0;
var SDID = 0;
var UberObj = new UberEats();
var SkipDishesObj = new SkipDishes();

var controllers = {
   sample: function(req, res) {
       var aboutInfo = {
           name: "Test",
           version: "v1.0.0"
       }
       res.json(aboutInfo);
   },

   uber_order: function(req, res) {
    UberObj.getOrders(req, res, UBID, function(err, order) {
               if (err)
               {
                res.send(err);
               }
           });
           UBID += 1;
           //res.sendFile(path.join(__dirname, '../public', 'view.html'));  //debug
    },

    uber_update: function(req, res) {
        UberObj.update(req, res, req["params"]["orderID"], req["params"]["updateType"], function(err, order) {
            if (err){
             res.send(err);
            }
        });
        //res.sendFile(path.join(__dirname, '../public', 'view.html'));  //debug
    },

    skipdishes_order: function(req, res) {
        SkipDishesObj.getOrders(req, res, SDID, function(err, order) {
            if (err)
            {
                res.send(err);
            }
        });
        SDID += 1;
    },

    skipdishes_update: function(req, res) {
        SkipDishesObj.update(req, res, req["params"]["orderID"], req["params"]["updateType"], function(err, order) {
            if (err){
             res.send(err);
            }
        });
    },

    skipdishes_list: function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(SkipDishesObj.getList(req, res , function(err, order) {
            if (err){
             res.send(err);
            }
        }));
    },

    uber_list: function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(UberObj.getList(req, res , function(err, order) {
            if (err){
             res.send(err);
            }
        }));
    },

};

module.exports = controllers;
