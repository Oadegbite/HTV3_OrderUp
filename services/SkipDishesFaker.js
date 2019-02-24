var faker = require('faker');


module.exports = class SkipTheDishesFaker {

  constructor() {
    this.SkipDishList = {};
    this.interval;
  }

  getOrders(req, res, SDID, next){
    //this is where we would make a request to other API
    //request()
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    var orderCreated = faker.date.recent();
    var price = faker.commerce.price(10,100);
    var today = new Date();
    today = today.toLocaleTimeString();

    var id = "SD" + SDID.toString();
    var Order = {
        id: id,
        items: ["OrderItem"],
        transactions: "Transaction",
        customer: randomName,
        vendor: "SkipTheDishes",
        subtotal: price,
        total: price * 1.13,
        note: "String",
        payment_method: randomCard["accountHistory"]["account"],
        created_at: today,
        updated_at: today,
        status_history: ["OrderStatus"],
        scheduled_pickup: "String",
        status: "Confirmation Pending",
        cancel_reason: "Null",
        settled_at: "Null",
        preparing_at: "Null",
        estimated_preparing_sec: "Int",
        attached_survey: "Survey",
        discount: "Int"
    }

    this.SkipDishList[today] = Order;
    console.log("Create " + Order["id"] + " : " + Order)
    //res.setHeader('Content-Type', 'application/json');
    try{
      //res.end(JSON.stringify(Order));
      console.log("Skip the dishs Order create success")
    }catch(e){
      console.log("Skipthe Eats getOrder: " + e);
    }
  }


  update(req, res, OrderId, updateType)
  {
    var today = new Date();
    console.log("List: " + this.SkipDishList);
    console.log(this.SkipDishList[OrderId] + " : " + OrderId)

      if (this.SkipDishList[OrderId])
      {
        var order = this.SkipDishList[OrderId]
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
        else if (updateType == "EnRoute")
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
  }

  getList(req, res)
  {
    return JSON.stringify(this.SkipDishList);
  }

}
