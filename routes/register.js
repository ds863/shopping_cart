var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var router = express.Router();




router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post('/register', function(req, res) {
  console.log('asdfasdfasdfasfd')
});




module.exports = router;
