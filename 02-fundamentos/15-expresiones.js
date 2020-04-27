// forma vieja
let miFunc = function() {
  console.log('hola mundo');
}
let otraFunc = miFunc;

console.log(typeof miFunc)
otraFunc();

// expression class
let Persona = class {
  // permite hacer las inicializaciones del objeto cuando es creado
  constructor(nombre) {
    this.nombre = nombre
  }

  gritarNombre() {
    console.log(this.nombre.toUpperCase())
  }
}

// let juan = Persona("juan")
let juan = new Persona("juan")
juan.gritarNombre()

console.log(juan instanceof Persona)
console.log(typeof Persona)
