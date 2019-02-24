'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
    .get(controller.sample);
   app.route('/Uber/:restaurantID/neworder')
    .get(controller.uber_order);
    app.route('/Uber/:restaurantID/updateOrderProgress/:orderID/:updateType')
    .get(controller.uber_update);
    app.route('/SkipTheDishes/:restaurantID/neworder')
    .get(controller.skipdishes_order);
    app.route('/SkipTheDishes/:restaurantID/updateOrderProgress/:orderID/:updateType')
    .get(controller.skipdishes_update);
    app.route('/Uber/getList')
    .get(controller.uber_list);
    app.route('/SkipTheDishes/getList')
    .get(controller.skipdishes_list);

};
