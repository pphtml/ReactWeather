var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(9900, function () {
  console.log('Express server is up on port 9900');
});
