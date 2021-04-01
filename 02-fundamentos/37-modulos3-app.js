import ComprasPendientes from './37-modulos3.js'
// import {unaTarea, miObjeto, crearTarea} from './37-modulos3-constantes-y-objetos.js'

import { unaTarea, misFunciones } from './37-modulos3-constantes-y-objetos.js'

let t1 = new ComprasPendientes('Cafe', 'Alta', 1);
let t2 = new ComprasPendientes('Pollo', 'Alta', 1);
let t3 = new ComprasPendientes('Jabon', 'Alta', 3);
t1.mostrar()
t2.mostrar()
t3.mostrar()

console.log(unaTarea)
// console.log(miObjeto)
console.log(
  misFunciones.crearTarea('comida perro', 'media')
)
console.log(
  misFunciones.tareaCompletada()
)