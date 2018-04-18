var express = require('express');
var path = require('path')
var cookie = require('cookie-parser')
var cookieSession = require('cookie-session')
var router = express.Router();
router.use(cookie());
router.use(cookieSession({secret: '123'}))



router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "../static", "login.html"), {dotfiles: "allow"})
});
router.post('/login', function(req, res){
	var usr = req.body.Username;
	req.session.user = req.body.Username;
	req.session.pw = req.body.Password;
	if(req.session.user === 'doe@mymusicstore.com' && req.session.pw === 'welcome1'){
		res.redirect('/orders')
		
	} else {
		res.send("Access Denied")
	}
	console.log(usr)
	
});
router.get('/logout', function(req, res){
	req.session.destroy()
});




module.exports = router;