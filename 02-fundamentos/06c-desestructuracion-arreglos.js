const personajes = ['Ironman', 'Hulk', 'Capitan']
                    
const [p1, hulk] = personajes
console.log(p1)


const [,,p3] = personajes
console.log(p3)
personajes.reverse()
personajes.sort()
console.log(personajes)

const retornaArreglo = () => {
  return ['ABC', 123]
}

const arr = retornaArreglo()
console.log(arr)


const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

const useState = (valor) => {
  return [valor, (nombre) => { console.log(nombre) }]
}

const state = useState('Ironman')
// fea manera de hacerlo
state[1]('Clark kent');


// Manera correcta
// Tarea: Extraer
// 1. el primer valor del arr se llamara nombre
// 2. el segundo se llama setNombre
const [nombre, setNombres] = useState('Ironman')
console.log(nombre)
setNombre('Tony')

