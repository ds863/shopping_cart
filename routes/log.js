var express = require('express');
var path = require('path')
var cookie = require('cookie-parser')
var cookieSession = require('cookie-session')
var router = express.Router();
router.use(cookie());
router.use(cookieSession({secret: '123'}))
var userController = require("../modules/user/controller")


router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "../static", "login.html"), {dotfiles: "allow"})
});
router.post('/', userController.compareEmailAndPassword);
router.get('/logout', function(req, res){
	req.session.destroy()
});




module.exports = router;
