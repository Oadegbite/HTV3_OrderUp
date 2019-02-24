var faker = require('faker');


var UberEatsFaker = {
  getOrders: function(req, res, ID, UberList,next){
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
        status: "Confirmation Pending",
        cancel_reason: "String",
        settled_at: "String",
        preparing_at: "String",
        estimated_preparing_sec: "Int",
        attached_survey: "Survey",
        discount: "Int",
    }

    UberList[id] = Order;
    console.log("Create " + Order["id"] + " : " + Order)
    //res.setHeader('Content-Type', 'application/json');
    try{
      //res.end(JSON.stringify(Order));
      console.log("success")
    }catch(e){
      console.log("Uber Eats getOrder: " + e);
    }
  },

  update: function(req, res, OrderId, updateType, UberList)
  { 
    var today = new Date();
    console.log("List: " + UberList);
    console.log(UberList[OrderId] + " : " + OrderId)

      if (UberList[OrderId])
      {
        order = UberList[OrderId]
        console.log(order["status"])
        if (updateType == "Confirm")
        {
          order.status = "In Progress";
          order.updated_at = today.toLocaleTimeString();
          order.status_history.push(order.status);
          order.preparing_at = today.toLocaleTimeString();

        }
        else if (updateType == "Ready")
        {
          order.status = "Done";
          order.updated_at = today.toLocaleTimeString();
          order.status_history.push(order.status);
          order.settled_at = today.toLocaleTimeString();
        }
        else if (updateType == "En Route")
        {
          order.status = "En Route";
          order.updated_at = today.toLocaleTimeString();
          order.status_history.push(order.status);
        }
        else
        {
          console.log("Invalid update Type");
          return;
        }
        console.log(order["status"])
      }
      else{
      console.log("No Object Found");
      return;
      }
      
    },
    

  searchObject: function(req, res, OrderId, updateType)
  { 
    
    
  }

}

module.exports = UberEatsFaker;
