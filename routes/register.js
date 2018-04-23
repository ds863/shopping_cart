var express = require('express');
var router = express.Router();

var userController = require('../modules/user/controller');

router.post('/', userController.create);




module.exports = router;
