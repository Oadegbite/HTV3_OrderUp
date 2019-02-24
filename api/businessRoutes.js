'use strict';

var businessController = require('./businessController');

module.exports = function(app) {
   app.route('/about')
       .get(businessController.sample);
  app.route('/')
    .get(businessController.sendIndex);
  app.route('/authenticate')
    .get(businessController.startPoll);
  app.route('/orders')
    .get(businessController.showOrders);
  app.route('/stahp')
    .get(businessController.stahp);
};
