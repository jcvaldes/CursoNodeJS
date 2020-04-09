const argv = require('yargs')
  .command('crear', 'Crear una tarea para hacer', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: "Descripción de la tarea por hacer"
    }
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: "Descripción de la tarea por hacer"
    },
    completado: {
      default: true,
      alias: 'c',
      desc: 'Marca como completado o pendiente una tarea'
    }
  })
  .command('listar', 'Lista las tareas')
  .help()
  .argv;

module.exports = {
  argv
}