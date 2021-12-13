
const nombre = 'tony stark'

console.log(`Mi nombre es ${nombre}`)
console.log(`Mi nombre es ${23}`)

console.log(`curso de  ${'javascript desde cero'}`)

// window.x
console.log(`Nonbre es ${x = 'juan'}`)

console.log(`Nonbre es ${function name() { return 'juan' }}`)

// funcion clousure
console.log(`Nonbre es ${
    (
        function name() { return 'juan carlos' })()
    }`
)

console.log(`Nonbre es:  ${
    (() =>
        function name() { return 'juan arrow' })
    }`
)

// es una estructura de control y no una expresion
// console.log(`Nonbre es ${if(true) {console.log('hola') } }`)

// ternarios
console.log(`Nombre: ${ true && 'hola'} `)
console.log(`Nombre: ${ false ? 'hola true' : 'hola false'} `)
console.log(`Nombre: ${['a', 'b'].map(letra => `${letra}-styled`)}`)
