console.log("MODEL");
var Schema = require("../db/schema");
var mongoose = require('mongoose');

var Workout = Schema.Workout;
module.exports = Workout;

// module.exports = [
//   {
// 	  day :'Monday',
// 	  warmup: '',
// 	  heavy: '',
//     cooldown: '',
// 	},{
// 	  day :'Tuesday',
// 	  warmup: '',
// 	  heavy: '',
//     cooldown: '',
// 	},{
// 	  day :'Wednesday',
// 	  warmup: '',
// 	  heavy: '',
//     cooldown: '',
// 	},{
// 	  day :'Thursday',
// 	  warmup: '',
// 	  heavy: '',
//     cooldown: '',
// 	},{
// 	  day :'Friday',
// 	  warmup: '',
// 	  heavy: '',
//     cooldown: '',
// 	},
// ];
// module.exports = router;
