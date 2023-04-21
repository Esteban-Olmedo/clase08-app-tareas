const { read } = require("./CRUD/read")
const { create } = require("./CRUD/create")

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
        default:
            console.log("no se encontro ningun comando que coincida");
            break
    }
}

comand(data[2], data[3], data[4])
