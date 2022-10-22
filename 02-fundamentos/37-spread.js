let lenguajes = ['Node', 'Php', 'Python']
console.log(lenguajes)
let [primero, segundo, tercero] = lenguajes.reverse()
console.log(lenguajes)

console.log(primero)
console.log(segundo)

let frameworks = ['Angular', 'Express', 'SailsJS']
console.log(frameworks)
let [uno, dos, tres] = [...frameworks].reverse()
const { firtsname, lastname } = req.body

console.log(frameworks)
console.log(uno)
console.log(dos)

// quiero eliminar una key de un objeto
const user = { id: 1, name: 'juan', lastName: 'val', edad: 45 }
const { edad, ...rest } = user
console.log(rest)

// Eliminar objeto de array

const users = [
  { id: 1, name: 'juan' },
  { id: 2, name: 'oliver' },
  { id: 3, name: 'joaquin' }
]

const index = 1 //elemento que quiero eliminar
console.log([...users.slice(0, index), ...users.slice(index + 1)])
