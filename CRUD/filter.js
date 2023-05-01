const { read } = require("./read");

const filter = (tituloFilter) => {
    const data = read();
    //return data.filter((tarea) => tarea.titulo === tituloFilter);
    const resultado = data.filter((tarea) => tarea.titulo.toLowerCase().includes(tituloFilter.toLowerCase()))
    console.log(resultado)
}
module.exports = { filter }