

var User = require('./model')


var create = function(req, res) {

	var { name, surename, email } = req.body

	var user = { name, surename, email };  
	user.password = 'welcome1'

	user.customer_id = Math.floor(Math.random() * 1001)
	console.log(user.password)
	console.log(user.customer_id)

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
var compareEmailAndPassword = function(req, res){
	var em = req.body.un;
	var pw = req.body.pw;
	if(em === User.find({ email }))
	console.log(em)
	

	/*
	code to compare email and password here
	*/
}

module.exports = {
	create,
	findByEmail,
	index,
	compareEmailAndPassword
} 

