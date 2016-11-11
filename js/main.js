function boton_enviar(){
	var contenedorChat=document.getElementById('chat');
	var mensaje=document.getElementById('mensajes').value;
	var nodoMensaje=document.createTextNode(mensaje);
	var p=document.createElement('p');

	var contenedorMayorMensaje=document.createElement('div');
	contenedorMayorMensaje.classList.add('w-message','w-message-out');
	var contenedorMensaje=document.createElement('div');
	contenedorMensaje.classList.add('w-message-text');

	contenedorChat.appendChild(contenedorMayorMensaje);
	contenedorMayorMensaje.appendChild(contenedorMensaje);
	contenedorMensaje.appendChild(p);
	p.appendChild(nodoMensaje);
}