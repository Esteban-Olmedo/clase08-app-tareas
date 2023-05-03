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
    return console.log(tareaBuscada)
}

module.exports = { buscar }

//console.log(buscar("tarea 4"))

///////////////////////////////////////////////////////////////////

// SOLUCION DEL MATI:

// const { clear } = require("console");
// const { read } = require("./read");

// function returnDescription(title) {
//   const data = read();

//   const description = data.filter((item) => item.titulo === title);

//   return description[0]
//     ? description[0].descripcion
//     : "Ningun titulo coincide con el ingresado";
// }

// module.exports = { returnDescription };