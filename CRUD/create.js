const { read } = require("./read")
const { write } = require("./writejson")

function create(titulo, descripcion) {
    const data = read()
    const nuevaTarea = { titulo, descripcion }
    data.push(nuevaTarea)
    write(data)
    return console.log("creado con exito")
}

module.exports = { create }

// EN MENTORIA CON LAUTARO LO HICIMOS ASI:
// const fs = require("fs");

// const agregarTarea = (titulo, descripcion) => {
//   //1-leer el archivo de tareas
//   const tareasString = fs.readFileSync("./tareas.json");
//   const tareas = JSON.parse(tareasString);
//   //2-agrego la nueva tarea
//   const tarea = {
//     titulo: titulo,
//     descripcion: descripcion,
//   };
//   tareas.push(tarea);
//   //3-guardar la tarea
//   const nuevasTareasString = JSON.stringify(tareas);
//   fs.writeFileSync("./tareas.json", nuevasTareasString);
// };

// agregarTarea("Dar clases", "Dar clases a las 19h");