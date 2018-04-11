var socket = io.connect('/');

socket.on('message', function (data) {
    data = JSON.parse(data);
    $('#messages').append('<div class="'+data.type+'">' +
	data.sender + ': ' + data.message + '</div>');
	
	var notification = new Notification(name, { body: data.message });


});

$(function() {

	Notification.requestPermission();

    $('#send').click(function() {
   	 var data = {
   		 message: $('#message').val(),
   		 type:'userMessage',
   		 sender: socket.id
   	 };
   	 socket.send(JSON.stringify(data));
   	 $('#message').val('');
    });
});