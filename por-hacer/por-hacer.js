const fs = require(`fs`);

let listadoPorHacer = [];

const guardardb = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(`No se pudo grabar`, err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require(`../db/data.json`);
    } catch (error) {
        listadoPorHacer = [];
    }


}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardardb();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardardb();
        return true;
    } else {
        return false;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar
}