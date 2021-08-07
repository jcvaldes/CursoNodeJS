let resultado, numero1 = 10, numero2 = 20, numero3

resultado = numero1 + numero2
console.log(resultado)

resultado = numero1 + numero3 //Not a number NaN
console.log(resultado)

// obtiene el residuo de la division
resultado = numero2 % numero1  
console.log(resultado)

resultado = Math.PI
console.log(resultado)

// redondeo normal
resultado = Math.round(2.99)
console.log(resultado)
resultado = Math.round(2.44)
console.log(resultado)


// redondea para abajo
resultado = Math.floor(2.99)
console.log(resultado)

// redondea para arriba
resultado = Math.ceil(2.1)
console.log(resultado)


// raiz cuadrada
resultado = Math.sqrt(4)
console.log(resultado)

// valor absoluto
resultado = Math.abs(-4)
console.log(resultado)

// potencia
resultado = Math.pow(2, 3)
console.log(resultado)

// min
resultado = Math.min(2, 3, 4, 1, 2)
console.log(resultado)

// max
resultado = Math.max(2, 3, 4, 1, 2)
console.log(resultado)

// random
resultado = Math.random()
console.log(resultado)


// presedencia de operadores
resultado = 10 + 20 - 5 // (10 + 20) - 5
console.log(resultado)
resultado = 10 + 2 * 5 // 10 + (2*5)
console.log(resultado)

// // descuento
let descuento = (10 + 10 + 40) * .5
console.log(descuento)

// incrementos

let puntaje = 10
console.log(++puntaje)
// console.log(puntaje)

let puntaje2 = 20
console.log(puntaje2++)
console.log(puntaje2)

