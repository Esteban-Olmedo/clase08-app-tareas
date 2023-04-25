const fs = require("fs")
//const { leerTareas } = require("./read")
//const leerTareas = require("./read")
const { read } = require("./read")

const buscar = (titulo) => {
    const tareas = read()
    const tareaBuscada = tareas.find((tareaBuscada) => {
        return tareaBuscada.titulo === titulo
    })
    if (!tareaBuscada) {
        return "no se encontraron resultados"
    }
    return tareaBuscada
}

module.exports = { buscar }

//console.log(buscar("tarea 4"))
