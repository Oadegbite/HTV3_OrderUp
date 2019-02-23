'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.sample);
   app.route('/Uber/:restaurantID/neworder')
       .get(controller.uber_order);
    app.route('/SkipTheDishes/:restaurantID/neworder')
    .get(controller.skipdishes_order);
};
