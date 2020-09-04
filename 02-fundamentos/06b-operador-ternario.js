

const activo = true;

// let mensaje = '';
// Manera fea
// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 

// Muchas veces hacemos esto con operador ternario
// const mensaje = ( activo ) ? 'Activo' : null; 

// Manera correcta de hacer lo anterior
const mensaje = activo && 'Activo';


// pegar en la consola del navegador
// 1 == 1 && 'hola'
// false && 'hola'

console.log(mensaje);
