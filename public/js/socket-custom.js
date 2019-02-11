var socket = io();

// Escuchar información o sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Los emmits son para enviar información
socket.emit('enviarMensaje', {
    user: 'Jonathan',
    message: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(message) {
    console.log('Servidor:', message);
});