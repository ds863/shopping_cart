var mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/cart-app'); //the last thing is always the db name

var db = mongoose.connection; 

db.on('error', function(err){
    console.log('Connection Error.', err);

});
db.on('open', function () {
  console.log('Connection opened')
});
db.on('connected', function(err){
    console.log('Conected')
});
db.on('disconnected', function(err){
    console.log('disconnected')
});

db.on('error',function (err) {
  console.log('Moongoose connection error ' + err);
});


process.on('SIGINT', function () {
  db.close (function () {
    console.log ('closing mongoose connection');
    process.exit (0);
  });
});

module.exports = db;