var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
var faker = require('faker');

app.get('/', function (req, res) {  
  res.send(faker.name.findName())
})

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
