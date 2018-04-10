var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

//db.js deki schema yı kullanıyoruz.
var User=mongoose.model("User");


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(error,users){
    res.render('list',{userList:users});
  });
  
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.post('/create', function(req, res, next) {
  new User(
    {
      name:req.body.name,
      lastname:req.body.lastname,
      username:req.body.username,
      password:req.body.password
    }
  ).save(function(error,comment)
  {
    res.redirect('/users');
  });
});

router.get('/delete/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id,function(error,next){
    res.redirect('/users');
  });
});

module.exports = router;
