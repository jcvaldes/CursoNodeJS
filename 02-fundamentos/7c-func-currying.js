// currificar es la técnica inventada por Moses Schönfinkel y Gottlob Frege
// que consiste en transformar una función que utiliza múltiples argumentos
//  en una secuencia de funciones que utilizan un único argumento
function creaSumador(x) {
  return function (y) {
    console.log('x + y', x + y)
    return x + y
  }
}

const baseuno = creaSumador(1)
const basecinco = creaSumador(5)

baseuno(10)
basecinco(10)
