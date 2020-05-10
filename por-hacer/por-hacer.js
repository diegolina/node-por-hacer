const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

};


const cargarDB = () => {

    listadoPorHacer = require('../db/data.json');

};

const crear = (descripcion) => {

    cargarDB();

    let porhacer = {
        descripcion: descripcion,
        completado: false

    };

    listadoPorHacer.push(porhacer);

    guardarDB();

    return porhacer;

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;

};


const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    };

};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    };

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};