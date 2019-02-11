const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // client.emit('enviarMensaje', {
        //     user: 'Administrador',
        //     message: 'Bienvenido a esta aplicación ' + data.user
        // });

        // if (message.user) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // }

    });
});