

var User = require('./model')


var create = function(req, res) {
	var { name, surename, password, customer_id, email } = req.body

	var user = { name, surename, password, customer_id, email };  


	User.create(user, function(err, user) {
		if(err)
			res.status(400).json(err)
		else
			res.status(201).json(user) 
	})

}

var findByName = function(req, res) {
	var { name, surename } = req.params;

	User.find({ name, surename }, function(err, user) {
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
	findByName,
	index
} 

