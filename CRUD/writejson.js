const fs = require("fs")

function write(array) {
    const data = JSON.stringify(array) //convierte a json
    fs.writeFileSync("./data.json", data) //escribe el archivo en el momento
}

module.exports = { write }
