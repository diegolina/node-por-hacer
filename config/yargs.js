const opciones_act = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Indica completado de la tarea por hacer'
    }
};

const opciones_crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const opciones_borrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', opciones_crear)
    .command('actualizar', 'actualiza el estado completado de la tarea', opciones_act)
    .command('borrar', 'elimina una tarea', opciones_borrar)
    .help()
    .argv;


module.exports = {
    argv
}