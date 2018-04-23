

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
var compareEmailAndPassword = function(req, res) {
	var { password, email } = req.body;
	var user = { password, email };
	if((JSON.stringify(req.body.email) === JSON.stringify(user.email)) && (JSON.stringify(req.body.password) === JSON.stringify(user.email)) ){
		res.redirect('/products')
	} else {
		res.status(500).json({ error: 'no results found' });
	}
	

	
	User.find({ password, email }, function(err, user) {
		if(err){
			console.log(err)
		} else {
			console.log(user.email)
		}
  
    
               
    })
    
 }
 var resetPassword = function(){
 	
 }
module.exports = {
	create,
	findByEmail,
	index,
	compareEmailAndPassword,
	resetPassword
} 

