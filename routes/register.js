const express = require('express');
const router = express.Router();

const userController = require('../modules/user/controller');

router.post('/', userController.create);




module.exports = router;
