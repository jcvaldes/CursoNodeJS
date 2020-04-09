const colors = require('colors');
const { argv } = require('./config/yargs');
const todo = require('./todo/todo');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    todo.crear(argv.descripcion);
    break;
  case 'listar':
    let listado = todo.getListado();
    for (let task of listado) {
      console.log('=====Por Hacer===='.green);
      console.log(task.descripcion);
      console.log('Estado: ', task.completado);
      console.log('=================='.green);


    }
    break;
  case 'actualizar':
    // Todo
    break;
  default:
    console.log('Comando no reconocido');

}