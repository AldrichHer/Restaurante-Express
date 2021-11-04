const http = require('http');

http.createServer((req, res)=>{
    res.write('Hola Mundo');
    res.end();
})
.listen(8181);


console.log("Escuchando el puerto: 8181");