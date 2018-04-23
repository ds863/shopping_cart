const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const validateEmail = email =>
	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);


const UserSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	surename: {
		type: String,
		require: true
	},
	email:  {
		type: String,
		require: true,
		unique: true,
		validate: [validateEmail, 'Invalid Eamil'],
	}
});

module.exports = mongoose.model("User", UserSchema);