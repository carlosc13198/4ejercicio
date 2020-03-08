const argv = require(`yargs`)
    .command(`crear`, `Crea un elemento por hacer`, {
        descripcion: {
            demand: true,
            alias: `d`,
            des: `Descripcion de la tarea por hacer`
        }
    }).command(`actualizar`, `Actualiza el estado completado de una tarea`, {
        descripcion: {
            demand: true,
            alias: `d`,
            des: `Descripcion de la tarea por hacer`
        },
        completado: {
            default: true,
            alias: `c`,
            desc: `Marca como completado o pendiente la tarea`
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}