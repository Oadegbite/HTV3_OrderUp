var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
app.use(function(req,res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var routes = require('./api/routes');
routes(app);

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
