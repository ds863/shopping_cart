var express = require('express');
var router = express.Router();




router.get('/', function(req, res) {
	res.status(500).json({ error: 'no results found' });
	
});

module.exports = router;