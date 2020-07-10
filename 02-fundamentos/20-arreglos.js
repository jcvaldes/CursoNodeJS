const numeros = [10, 20, 30, 40, 50]
console.log(numeros)

const meses = new Array('Febrero', 'Marzo')
console.log(meses)
const mezclado = ['Hola', 20, null, true, undefined]
console.log(mezclado)

console.log('Cantidad Meses', meses.length)

let nombre = 'Juan'
console.log(Array.isArray(nombre))

console.log(Array.isArray(numeros))

meses.push('Abril')
meses.push('Mayo')
meses.push('Junio')

console.log(meses)

// buscar en arreglo
console.log(meses.indexOf('Abril'))
console.log(meses[meses.indexOf('Abril')])

// añadir al principio del arreglo
meses.unshift('Enero')
console.log(meses);

// elimino ultimo elemento del arreglo
meses.pop()
console.log(meses);

// eliminar primero
meses.shift()
console.log(meses);

// elimino un mes a partir de una determinada posicion que no sea inicio o fin
meses.splice(2, 1) 
console.log(meses);

// invertir arreglo
meses.reverse()
console.log(meses);

// concatenar arreglos
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7]

console.log(arreglo1.concat(arreglo2));

const frutas = ['Banana', 'Manzana', 'Fresa', 'Naranja', 'Sandia']
console.log(frutas);

// ordeno arreglo de string
frutas.sort()
console.log(frutas);

//ordeno arreglos de numeros
 const arreglo3 = [3,9, 99, 92, 10, 1, 2, 5]

// // ohhh no funciona
// arreglo1.sort()
// console.log(arreglo3);

// forma de correcta de ordenar arreglo de numeros
arreglo3.sort(function(a, b) {
   return a - b
})
console.log(arreglo3);

// orden invertido de arreglo de numeros 
arreglo3.sort(function(a, b) {
  return b - a
})
console.log(arreglo3);

const arr = [1,2,3,4]
// bad 
// const first = arr[0]
// const second = arr[0]

// good
const [first, second] = arr


