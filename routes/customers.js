var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var router = express.Router();


router.get('/', function(req, res, next) {
	
	res.status(500).json({ error: 'no results found' });

});
router.get('/update/shipping', function(req, res) {
	res.sendFile(path.join(__dirname, "../static", "shipping.html"), {dotfiles: "allow"})
    
	//console.log(path.join(__dirname, "../static", "shipping.html"))
});
router.post('/update/shipping', function(req, res) {
	
	console.log(req.body.Name)
	console.log(req.body.Address)
	console.log(req.body.City)
	console.log(req.body.State)

});
router.post('/update/billing', function(req, res) {
	res.status(500).json({ error: 'no results found' });
});
router.post('/update/cart', function(req, res) {
	res.status(500).json({ error: 'no results found' });
});

module.exports = router;