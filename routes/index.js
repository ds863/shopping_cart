var express = require('express');
var path = require('path');
var router = express.Router();
 
router.get('/', function(req, res) {
	console.log(__dirname);
    res.sendFile(path.join(__dirname, "../views", "shopping.html"), {dotfiles: "allow"})
    
});

module.exports = router;