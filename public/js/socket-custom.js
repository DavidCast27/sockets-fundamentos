var socket = io();

// escuchar eventos
socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('se perdio la conexion con el servidor');
})

socket.on('enviarMensaje', function(data) {
    console.log(data);
})

//enviar informacion
socket.emit('enviarMensaje', {
    nombre: 'david',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta SERVER', resp);
});