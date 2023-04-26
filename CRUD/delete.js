// Archivo delete.js: esta funcionalidad es bastante sencilla pero requiere de
// bastante lógica. Recibirá como parámetro un título, obtendrá el listado de
// tareas, y eliminará de ese listado la tarea cuyo title coincida con el parámetro
// que recibe. Finalmente deberá escribir el JSON de datos con el listado
// actualizado.

const fs = require("fs")
//const leerTareas = require("./read")

const borrar = (titulo) => {
    const tareas = fs.readFileSync("./data.json", "utf8")
    const tareasParse = JSON.parse(tareas)
    const tareaBorrada = tareasParse.filter((tarea) => {
        return titulo !== tarea.titulo
    });
    const tareasRestantes = JSON.stringify(tareaBorrada)
    fs.writeFileSync("./data.json", tareasRestantes)
    //return tareaBorrada;
    return console.log(tareaBorrada, "borrado con exito")
}

module.exports = { borrar }
//console.log(borrar("tarea 4")) 











// const fs = require("fs")
// const {read} = require("./read")
// const {write} = require("./writejson")

// function borrar(titulo) {
//     const data = fs.readFileSync("./data.json", "utf8")
//     const dataParsed = JSON.parse(data)
    
// }