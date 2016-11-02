const express = require("express");

var fs = require("fs");

var app = express();

var gData = null;


fs.readFile("books.json",function(err,data){
	// 数据读取成功
	if (err)
		throw new Error("读取数据出错了！");
	gData = data;
	app.listen(7000);
})

app.get("/books",function(req,res){
	res.send(gData);
})