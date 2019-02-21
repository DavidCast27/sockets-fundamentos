const { io } = require("../server");


io.on('connection', (client) => {
    console.log('usuario conectado');
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })

    //escuchar el clinete
    client.on('enviarMensaje', (data, callback) => {

        console.log('servidor:', data);
        client.broadcast.emit('enviarMensaje', data);
        // if (data.nombre) {
        //     callback({
        //         resp: 'todo OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo MALLLL'
        //     });
        // }

    });

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'welcome'
    });
})