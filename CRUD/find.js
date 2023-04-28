const { read } = require("./read")

// function find(tituloBuscar) {
//     const data = read();
//     return console.log(data.some((tarea) => tarea.titulo === tituloBuscar))
// }

const find = (tituloBuscar) => {
    const data = read()
    const resultado = (data.some((tarea) => tarea.titulo === tituloBuscar))
    //return console.log(resultado)
    return resultado
}

module.exports = { find }