var express = require('express')
var app = express();
var port = 3001;
app.use(function(req,res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var routes = require('./api/businessRoutes');
routes(app);

app.listen(port, function() {
   console.log('Business server started on port: ' + port);
});
