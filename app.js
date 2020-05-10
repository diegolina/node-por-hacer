const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porhacer.getListado();

        for (let tarea of listado) {
            console.log('-------------------------------'.green);
            console.log('Descripcion: ' + tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('-------------------------------'.green);
        };

        break;

    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Acttualizacion completada');
        } else {
            console.log('Error en la actualizacion');
        };

        break;

    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Borrado completado');
        } else {
            console.log('Error en el borrado');
        };

        break;
    default:
        console.log('comando no reconocido');

}