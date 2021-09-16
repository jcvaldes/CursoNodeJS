saludar('Juan')

// function declaration
function saludar(nombre) {
  console.log('Bienvenido ' + nombre)
}

saludar('Juan')

// expression function
// cliente('tony stark') // Error! no anda
// const cliente = function(nombre) {
//   console.log('nombre cliente' + nombre)
// }

// cliente('tony stark')

// OJO
// saludar = 30

// No se puede
// cliente = 30

// console.log(saludar)
// console.log(cliente)

// const getUser = () => { 
//   return {uid: 'AB2332', username: 'scylla'}
// };

// Quiero retornar un objeto en una sola linea. Esta Mal la siguiente linea
// const getUser = () => { uid: 'AB2332', username: 'scylla'};

// Forma correcta
const getUser = () => ({ uid: 'AB2332', username: 'scylla'});
console.log(getUser())

const getCharacter = (personaje) => {
  console.log(personaje)
  return (poder) => {
    switch (poder) { 
      case 1:
        console.log('disparar rayos por los ojos');
        break;
      case 2:
        console.log('soplido')
        break;
      case 3:
        console.log('velocidad')
        break
    }
  }
}
getCharacter('flash')(3)

// Tarea

 // 1. Transformar a una funcion flecha
 // 2. Tiene que retornar un objeto implicito
 // 3. Mostrar el valor retornado de la función

 function getUsuarioActivo(nombre) {
   return {
     uid: 'AB123',
     username: nombre
   }
 }
