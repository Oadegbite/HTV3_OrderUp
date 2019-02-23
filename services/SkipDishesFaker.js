var faker = require('faker');


var SkipTheDishesFaker = {
  getOrders: function(req, res, next){
    //this is where we would make a request to other API
    //request()
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    var orderCreated = faker.date.recent();

    var Order = {
        _id: randomName,
        items: ["OrderItem"],
        transactions: "Transaction",
        customer: "Customer",
        vendor: "Vendor",
        subtotal: "Int",
        total: "Int",
        note: "String",
        payment_method: randomCard,
        created_at: "String",
        updated_at: "String",
        status_history: ["OrderStatus"],
        scheduled_pickup: "String",
        status: "String",
        cancel_reason: "String",
        settled_at: "String",
        preparing_at: "String",
        estimated_preparing_sec: "Int",
        attached_survey: "Survey",
        discount: "Int"
    }
    res.send(Order);
  }
}

module.exports = SkipTheDishesFaker;