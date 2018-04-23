var router = require("express").Router()

var userController = require("./controller")

router.get('/', userController.index);
router.get("/findByName/:name", userController.findByName);

router.get('/listUsers', userController.index);

module.exports = router


