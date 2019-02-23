var faker = require('faker');


var SkipTheDishesFaker = {
  getOrders: function(req, res, SDID,next){
    //this is where we would make a request to other API
    //request()
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    var orderCreated = faker.date.recent();

    var Order = {
        _id: "SD" + SDID.toString(),
        items: ["OrderItem"],
        transactions: "Transaction",
        customer: randomName,
        vendor: "Vendor",
        subtotal: "Int",
        total: "Int",
        note: "String",
        payment_method: randomCard["accountHistory"]["account"],
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
  },


  setInProgress: function(req, res, OrderId, updateType)
  { 
    if (updateType == "inprogess")
    {
      console.log(OrderId);
      console.log(updateType);
      var body = res["body"]
      console.log(body);
      body["status"] = 10;
      res.send(body);
    }
    else if (updateType == "cancelled")
    {
      console.log(OrderId);
      console.log(updateType);
      var body = res["body"]
      console.log(body);
      body["status"] = 10;
      res.send(body);
    }
    else if (updateType == "complete")
    {
      console.log(OrderId);
      console.log(updateType);
      var body = res["body"]
      console.log(body);
      body["status"] = 10;
      res.send(body);
    }
    else if (updateType == "scheduled_pickup")
    {
      console.log(OrderId);
      console.log(updateType);
      var body = res["body"]
      console.log(body);
      body["status"] = 10;
      res.send(body);
    }
    
  }
}

module.exports = SkipTheDishesFaker;