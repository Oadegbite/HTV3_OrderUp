'use strict';

var businessController = require('./businessController');

module.exports = function(app) {
   app.route('/about')
       .get(businessController.sample);
  app.route('/')
    .get(businessController.sendIndex);
};
