var express = require('express');
var router = express.Router();
var db = require('../db');
var mongoose=require("mongoose");



//db.js deki schema yı kullanıyoruz.
var User=mongoose.model("users");


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(error,users){

if(error)
{

console.error(error);

}

    res.render('list',{userList:users});
  });
  
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.post('/create', function(req, res, next) {
  //bu mongoose dan yukrıda tanımlarığımız user modeli
  new User(
    {
      name:req.body.name,
      lastname:req.body.lastname,
      username:req.body.username,
      password:req.body.password
    }
    //entityframework deki savechanges gibi
  ).save(function(error,comment)
  {

    if(error)
    {

      console.error(error);
    }
    res.redirect('/list');
  });
});

router.get('/delete/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id,function(error,next){
    res.redirect('/list');
  });
});

module.exports = router;
