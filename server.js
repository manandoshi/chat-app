var express=require('express');
var app = express();
var http = require('http').Server(app);
var mysql = require('mysql');
var io = require('socket.io')(http);
var bodyParser = require("body-parser");
var auth = require("socketio-auth");
var connection = mysql.createConnection({
		host     	: 'localhost',
		user     	: 'root',
		password 	: 'Qwerty@314',
		database 	: 'chat',
	});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use('/', express.static(__dirname));

io.on('connection',function (socket) {
	console.log("In socket code");
	socket.on('Fuck yes', function(msg){
		console.log(msg);app.use('/', express.static(__dirname));
	});
/*	auth(io, {
  		authenticate: function (client, data, callback) {
	   		//get credentials sent by the client
	    	var username = data.username;
	    	var password = data.password;
	    	console.log("In auth, idk how.");
    		if(username=="admin" && password=="hunter2"){
    			return callback(null, user.password=password);
    		}
    		else{
    			return callback(new Error("User not found"))
    		}
  		}
	});*/
	
});

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0"; // Listening to localhost if you run locally
app.listen(port, address);