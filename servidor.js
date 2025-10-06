// 1. Requerimos el módulo 'http' que viene con Node.js.
// Este módulo nos permite crear servidores web.
const http = require('http');
// 2. Definimos el puerto en el que nuestro servidor escuchará.
// Piensa en un puerto como una puerta en tu computadora.
const puerto = 8080;
// 3. Creamos el servidor. La función que le pasamos se ejecutará
// cada vez que alguien visite nuestro servidor desde un navegador.
const servidor = http.createServer(function (req, res) {

 // Escribimos el encabezado de la respuesta.
 // 200 significa que todo salió bien. 'Content-Type' le dice al navegador
 // que le enviaremos texto con formato HTML en español.
 res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

 // Escribimos el mensaje que se verá en el navegador.
 // ¡Puedes cambiar este mensaje por lo que tú quieras!
 res.end('<h1>¡Hola mi nombre es Abraham Enrique Becerril Tellez y es mi primera vez usando node.js! 👋</h1>');
});
// 4. Le decimos a nuestro servidor que empiece a escuchar peticiones
// en el puerto que definimos antes. El mensaje en la consola te avisará
// cuando el servidor esté listo.
servidor.listen(puerto, function() {
 console.log(`¡Servidor escuchando en http://localhost:${puerto}/`);
});