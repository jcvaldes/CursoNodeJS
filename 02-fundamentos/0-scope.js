"use strict"
// scope global
var cat = 'Tom'

// F10 ejecuta la proxima instrucción pero no entra en la función cuando pasa por una
// F11 entra en la funcion cuando pasa por una
// F8 salta a la proxima función esto es solo en el navegador
// Cuando se debuguea en nodejs lo que es F8 es F5
function f1() {
  // scope de funcion
  // variable shadowing, no es la global 
  var cat = 'Felix'
  console.log(cat);
 
  // window funciona solo en el navegador no es asi en node
  // console.log(window.cat);
}

function f2() {
  cat = 'Gardfield'
  console.log(cat);
  // problema de hoisting. mala práctica 
  // dog = 'Oliver'
}
console.log(cat);
f1()
console.log(cat);
f2()
console.log(cat);

// console.log(dog);
