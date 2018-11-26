var express = require('express');
var router = express.Router();

var userModel = require('../model/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index'});
});

router.post('/',(req,res,next)=>{
	if(req.body.username == '' ||req.body.password == ''){
		return;
	}else{
		userModel.find({
			username:req.body.username
		}).then(info=>{
			if(info.length>0){
				res.send("false");
			}else{
				userModel.create({
					username:req.body.username,
					password:req.body.password
				}).then(result=>{
					console.log(result);
					res.send("true")
				}).catch(err=>{
					console.log(err);
				})
			}
		})
	}
	
})

module.exports = router;
// 