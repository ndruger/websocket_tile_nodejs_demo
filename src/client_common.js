/*global KeyEvent, WebSocket, io */
if (typeof KeyEvent == 'undefined') {
	KeyEvent = {DOM_VK_LEFT: 37, DOM_VK_UP: 38, DOM_VK_RIGHT: 39, DOM_VK_DOWN: 40, DOM_VK_1: 49};
}
function WebSocketProxy(port, openProc, messageProc, closeProc){
	var full_domain = location.href.split('/')[2].split(':')[0];
	this.ws = new WebSocket('ws://' + full_domain + ':' + port);
	this.ws.onopen = openProc;
	this.ws.onmessage = function(data){
		messageProc(data.data);
	};
	this.ws.onclose = closeProc;
}
WebSocketProxy.prototype.send = function(message){
	this.ws.send(message);
};
WebSocketProxy.prototype.close = function(){
	this.ws.close();
};
