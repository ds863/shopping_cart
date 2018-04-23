var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var validateEmail = function(email){
	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}


var UserSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	surename: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	customer_id: {
    unique: true,
    type: Number
	},
	email:  {
		type: String,
		require: true,
		unique: true,
		validate: [validateEmail, 'Invalid Eamil'],
	}
});

module.exports = mongoose.model("User", UserSchema);