const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => this._listado[tarea.id] = tarea);
    }

    listadoCompleto() {
        console.log();
        let estado = 'Completada'.green;
        this.listadoArr.forEach((tarea, i) => {
            estado = (tarea.completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${String(i+1).green}${'.'.green} ${tarea.desc} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true) {

        let estado = 'Completada';
        this.listadoArr.filter(tarea => (!!tarea.completadoEn) === completadas).forEach((tarea, i) => {
            estado = (tarea.completadoEn) ? tarea.completadoEn.green : 'Pendiente'.red;
            console.log(`${String(i+1).green}${'.'.green} ${tarea.desc} :: ${estado}`);
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });

    }
}


module.exports = Tareas;