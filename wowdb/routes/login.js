var express = require('express');
var router = express.Router();

var userModel = require('../model/user');

router.get('/',function (req,res){
	res.render("index",{title:'index'})
});

router.post('/',function (req,res,next){
	console.log(req.body);
	userModel.find({
		username:req.body.username,
		password:req.body.password
	}).then(info=>{
		console.log(info);
		if(info.length>0) {
			res.send("true");
			console.log('llll')
		}else {
			res.send("false");
			console.log('hhh')
		}
	}).catch(err=>{
		
	})
})
module.exports = router;
