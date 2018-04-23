var router = require("express").Router()

var userController = require("./controller")

router.get('/admin', userController.index);
router.get("/findByEmail/:email", userController.findByEmail);
router.post('/reset', userController.resetPassword)
//router.get('/listUsers', userController.index);//different route path same end location

module.exports = router


