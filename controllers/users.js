var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Workout = require('../models/workout.js');
var User = require('../models/user.js');
// var authHelpers = require('../helpers/auth.js');

// router.get('/', function(req, res) {
//   console.log("seeded workout");
//   res.json({fitWeek: fitWeek})
//   User.find
// });


router.post('/', function(req, res){

  var user = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username
    // password_digest: res.hashedPassword (I am gonna need this if I decide to do password stuff)
  });

  user.save(function(err, user){
    if(err){ console.log(err); }
    res.json({status: 201, message: 'user created'});
  });

});








module.exports = router;
