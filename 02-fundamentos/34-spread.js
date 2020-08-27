let lenguajes = ['Node', 'Php', 'Python']
console.log(lenguajes)
let [ primero, segundo, tercero ] = lenguajes.reverse()
console.log(lenguajes)
console.log(primero)
console.log(segundo)

let frameworks = ['Angular', 'Express', 'SailsJS']
console.log(frameworks)
let [ uno, dos, tres ] = [...frameworks].reverse()
console.log(frameworks)
console.log(uno)
console.log(dos)

function suma (a,b,c) {
  console.log(a+b+c)
}

const numeros = [1,2,3]
suma(...numeros)
