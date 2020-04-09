console.log('Inicio del programa')

setTimeout(function() {
  console.log('Primer timeout');
}, 3000)
setTimeout(function() {
  console.log('Segundo timeout');
}, 0)
setTimeout(function() {
    console.log('Tercer timeout');
}, 0)


// let timeout = setTimeout(function() {
//   console.log('Cuarto timeout');
//   return 1
// }, 0)



// console.log(timeout);


console.log('Fin del programa')