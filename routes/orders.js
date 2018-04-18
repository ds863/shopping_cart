var express = require('express');
var router = express.Router();




router.get('/', function(req, res) {
	if(req.session.Username !== 'doe@mymusicstore.com a'){
		console.log('no')
	} else {
		console.log('yes')
	}
	//res.status(500).json({ error: 'no results found' });
});
router.post('/add', function(req, res) {
	
	res.status(500).json({ error: 'no results found' });
});


module.exports = router;