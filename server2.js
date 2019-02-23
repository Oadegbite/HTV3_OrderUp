var express = require('express')
var app = express();
var port = 3001;

var routes = require('./api/businessRoutes');
routes(app);

app.listen(port, function() {
   console.log('Business server started on port: ' + port);
});
