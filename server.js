var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
