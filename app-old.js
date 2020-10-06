const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'ContentType': 'application/json' });

        let salida = {
            nombre: 'Jorge',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');