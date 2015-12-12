function submit () {
	var socket = io();
	var username = $('#user').val();
	var password = $('#pass').val();

	
//  		socket.emit('authentication', {username: username, password: password});
//  		socket.on('authenticated', function() {
    socket.emit("Fuck Yes", "no");
    console.log("Fuck yes", "no");
//		});
}