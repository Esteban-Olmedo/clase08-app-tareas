const { read } = require("./CRUD/read")
const { create } = require("./CRUD/create")
const { borrar } = require("./CRUD/delete")
const { buscar } = require("./CRUD/return")
const { update } = require("./CRUD/update")
const {find} = require("./CRUD/find")

const data = process.argv;

read()

const comand = (comando, param1, param2) => {
    switch (comando) {
        case "read":
            console.log(read()); //comando para leer el json
            break;
        case "create":
            create(param1, param2) //funcion para crear una tarea
            break;
        case "delete":
            borrar(param1)
            //console.log(borrar(param1))
            break;
        case "return":
            //console.log(buscar(param1))
            buscar(param1)
            break;
        case "update":
            update(param1, param2)
            break;
        case "find":
            console.log(find(param1))
            break;
        default:
            console.log("no se encontro ningun comando que coincida");
            break
    }
}

comand(data[2], data[3], data[4])
