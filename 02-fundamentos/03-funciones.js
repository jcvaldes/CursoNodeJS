saludar('Juan')

// function declaration
function saludar(nombre) {
  console.log('Bienvenido ' + nombre)
}

saludar('Juan')

// expression function
// cliente('tony stark') Error! no anda
const cliente = function(nombre) {
  console.log('nombre cliente' + nombre)
}

cliente('tony stark')