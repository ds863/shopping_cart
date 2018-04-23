

var User = require('./model')


var create = function(req, res) {
	var { name, surename, email } = req.body

	var user = { name, surename, email };  

	
	User.create(user, function(err, user) {
		if(err)
			res.status(400).json(err)
		else
			res.status(201).json(user) 
	})

}

var findByEmail = function(req, res) {
	var { email } = req.params;

	User.find({ email }, (err, user) => {
		if(err)
			res.status(500).send('Internal Server Error')
		else
			res.status(200).json(user)
	})

}

var index = function(req, res){
	User.find({}, function(err, user) {
		if(err)
			res.status(500).send('Internal Server Error')
		else
			res.status(200).json(user)
	})
}

module.exports = {
	create,
	findByEmail,
	index
} 

