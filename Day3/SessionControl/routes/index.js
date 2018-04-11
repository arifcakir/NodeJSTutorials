var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  if (!req.session.username) {
    res.redirect('/login');
  } else
  {
      console.log(req.session.username);
      res.render('index', { username: req.session.username });
  }
});

router.get('/login', function(req, res) {

if(!req.session.username)
{
    res.render('login');
}
else
{
res.redirect('/');
}
   


});

router.post('/login', function(req,res) {
    var username = req.body.username;
    var token = req.body.token;
    
    if (token == "merhaba") {
   	 req.session.username = username;
	 console.log(req.session.username + " giris yapti!");
   	 res.redirect('/');
    } else {
   	 res.redirect('/login');
    }
    
});

router.get('/logout', function(req, res) {
    if (req.session.username) {
	console.log(req.session.username + " cikis yapti!");
	req.session.destroy();
    }
    res.redirect('/');
});

module.exports = router;
