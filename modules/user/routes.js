const router = require("express").Router()

const userController = require("./controller")


router.get("/findByEmail/:email", userController.findByEmail);

router.get('/', userController.index);

module.exports = router


