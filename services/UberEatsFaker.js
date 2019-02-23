var faker = require('faker');


var UberEatsFaker = {
  getOrders: function(req, res, ID,next){
    //this is where we would make a request to other API
    //request()
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    var orderCreated = faker.date.recent();
    var id = "UB" + ID.toString();
    var Order = {
        id: id,
        items: ["OrderItem"],
        transactions: "randomCard",
        customer: randomName,
        vendor: "Vendor",
        subtotal: "Int",
        total: "Int",
        note: "String",
        payment_method: "randomCard",
        created_at: 'orderCreated',
        updated_at: "String",
        status_history: ["OrderStatus"],
        scheduled_pickup: "String",
        status: "String",
        cancel_reason: "String",
        settled_at: "String",
        preparing_at: "String",
        estimated_preparing_sec: "Int",
        attached_survey: "Survey",
        discount: "Int",
    }

    res.setHeader('Content-Type', 'application/json');
    try{
      res.end(JSON.stringify(Order));
      console.log("success")
    }catch(e){
      console.log(e);
    }
  },

  setInProgress: function(req, res, OrderId, updateType)
  {
    console.log(OrderId);
    console.log(updateType);
    var body = JSON.parse(req);
    console.log(body);
    body["status"] = 10;
    res.send(body);
  }

}

module.exports = UberEatsFaker;
