const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear nota');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Lista de notas por hacer');

        let listado = porHacer.getListado();

        console.log('========== Por hacer =========='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('==============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando desconocido');
        break;

}