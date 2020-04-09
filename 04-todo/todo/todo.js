const fs = require('fs');
const path = require('path')

let todoList = [];

const guardarDB = () => {
  let data = JSON.stringify(todoList);
  // const data = new Uint8Array(Buffer.from('Hello Node.js'));
  fs.writeFile(path.resolve(__dirname, '../', `db/data.json`), data, (err) => {
    if (err) {
      throw new Error('No de pudo guardar');
    }
    console.log('Archivo guardado');
  });
}
const cargarDB = () => {
  try {
    todoList = require('../db//data.json');
  } catch (err) {
    todoList = [];
  }
}
const getListado = () => {
  cargarDB();
  return todoList;
}
const crear = (descripcion) => {
  cargarDB();
  let todo = {
    descripcion,
    completado: false
  }
  todoList.push(todo)
  guardarDB();
  return todo;
}
module.exports = {
  crear,
  getListado
}