var client = require('mariasql');
const express = require('express');
var path = require('path');


var c = new client({
	host:'127.0.0.1',
	user: 'root',
	password: 'dreamsys',
	db: 'project'
});

const app = express();
app.use(express.static(path.join("/media/karl/Acer/Users/Karl Solomon/Desktop/CMSC100/cmsc127/css/style.css")))

c.connect(() => {
	console.log("Connected");
});

app.get('/login',(req,res) => {

	res.sendFile('/media/karl/Acer/Users/Karl Solomon/Desktop/CMSC100/cmsc127/login.html');

})




app.listen(3000,() => {
	console.log("server start");
});
