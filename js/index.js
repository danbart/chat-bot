$(function() {

	// chat alias
	var you = 'anonimo';
	var robot = 'Alejandra';
	
	// Tiempo de inicio y de demora
	var delayStart = 400;
	var delayEnd = 800;
	
	// inicializar
	var bot = new chatBot();
	var chat = $('.chat');
	var waiting = 0;
	$('.busy').text(robot + ' esta escribiendo...');
	
	// enviar mensaje al bot
	var submitChat = function() {
	
		var input = $('.input input').val();
		if(input == '') return;
		
		$('.input input').val('');
		updateChat(you, input);
		
		var reply = bot.respondTo(input);
		if(reply == null) return;
		
		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busy').css('display', 'block');
		waiting++;
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			} else {
				for(var r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			if(--waiting == 0) $('.busy').css('display', 'none');
		}, latency);
	}
	
	// agrega nueva linia al chat
	var updateChat = function(party, text) {
	
		var style = 'alert alert-info';
		if(party != you) {
			style = 'alert alert-danger';
		}
		
		var line = $('<div><strong class="party" ></strong> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').addClass(style).text(text);
		
		chat.append(line);
		
		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});
	
	}
	
	// iniciando evento
	$('.input').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
	$('.input a').bind('click', submitChat);
	
	// chat inicial
	updateChat(robot, 'Hola dime como puedo ayudarte?');

});