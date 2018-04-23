var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var router = express.Router();
var mongo = require('mongodb')
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/data';

var db; 

mongo.connect(url, function(err, dbase){
	if(err) {
		return cb(err)
	} 
	console.log('connected to server');
	db = dbase;
})

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  Email: String
});
var User = mongoose.model("User", userSchema);

router.post('/', function(req, res) {
   var newUser = new User();
   newUser.firstName = req.body.Firstname;
   newUser.lastName = req.body.Firstname;
   newUser.Email = req.body.Firstname;
   db.createCollection('users', { capped : true, size : 5242880, max : 5000 })
   db.users.insertOne(newUser)
   console.log(newUser);
   //res.send(newUser)
});




module.exports = router;
