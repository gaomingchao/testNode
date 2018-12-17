var fs = require('fs');
var express = require('express');
var express = require('../db');

const fn = (req, res, next)=>{
	console.log(req.headers.host);
	var d = new Date()*1;
	var hz = req.files[0].originalname.split(".")[1];
	var filesName = "lg"+d+"."+hz;
 	var des_file = "./upload/" + filesName;
 	fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
            if( err ){
                response = {
                     success:false,
                     msg:"上传失败"
                };
            }else{
                response = {
                     success:true,
                     msg:"上传成功",
                     filename:req.headers['x-forwarded-proto']+"://"+req.headers.host+"/images/"+filesName
                };
             }
             res.send( JSON.stringify( response ) );
         });
    });
}

const addbook = (req, res, next)=>{
	 console.log(req.body);
}

module.exports = {
 	fn
 }

