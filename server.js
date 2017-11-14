var client = require('mariasql');
const express = require('express');

var c = new client({
	host:'127.0.0.1',
	user: 'root',
	password: 'dreamsys',
	db: 'project'
});

const app = express();


c.connect(() => {
	console.log("Connected");
});

app.get('/login',(req,res) => {
	res.sendFile('login.html');
})


app.listen(3000,() => {
	console.log("server start");
});
