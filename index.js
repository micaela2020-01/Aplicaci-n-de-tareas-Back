const http = require("http")

function requestController(){
    //logica de la funcion
    console.log("Hola Mundo")
}
//configuro servidor
const server = http.createServer(requestController)

server.listen(4000)

