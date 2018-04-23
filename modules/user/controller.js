

const User = require('./model')


const create = (req, res) => {
	const { name, surename, email } = req.body

	const user = { name, surename, email };  

	
	User.create(user, (err, user) => {
		if(err)
			res.status(400).json(err)
		else
			res.status(201).json(user) 
	})

}

const findByEmail = (req, res) => {
	const { email } = req.params;

	User.find({ email }, (err, user) => {
		if(err)
			res.status(500).send('Internal Server Error')
		else
			res.status(200).json(user)
	})

}

const index = (req, res) => {
	User.find({}, (err, user) => {
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

