var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  firstName: String,
  LastName: String,
  Email: String
});
