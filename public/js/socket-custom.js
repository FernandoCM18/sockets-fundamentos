var socket = io();

        // On es para escuchar 
        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function() {
            console.log('Perdimos conexion con el servidor');
        });

        // Emit es para enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola Mundo'
        }, function(resp) {
            console.log('respuesta server: ', resp);
        });

        // Escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor:', mensaje);
        });
    