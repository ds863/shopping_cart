var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	
	res.status(500).json({ error: 'no results found' });

});
router.post('/update/shipping', function(req, res) {
	
	res.status(500).json({ error: 'no results found' });
});
router.post('/update/billing', function(req, res) {
	res.status(500).json({ error: 'no results found' });
});
router.post('/update/cart', function(req, res) {
	res.status(500).json({ error: 'no results found' });
});

module.exports = router;