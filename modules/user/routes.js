var router = require("express").Router()

var userController = require("./controller")


router.get("/findByEmail/:email", userController.findByEmail);

router.get('/', userController.index);

module.exports = router


