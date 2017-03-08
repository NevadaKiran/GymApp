var express = require('express');
var app = express();
var router = new Router()
var bodyParser = require('body-parser');

// CONTROLLERS


// MIDDLE WARES
app.use(express.static('public'));
app.use(bodyParser.json());



// LISTENERS
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening to 3000");
});
