// funcionan en modo strict
class Persona {
  // permite hacer las inicializaciones del objeto cuando es creado
  constructor(nombre) {
    this.nombre = nombre
  }

  gritarNombre() {
    console.log(this.nombre.toUpperCase())
  }
}

// vieja forma
Persona.prototype.decirNombre = function() {
  console.log(this.nombre)
}
// let juan = Persona("juan")
let juan = new Persona("juan")

juan.decirNombre()
juan.gritarNombre()
console.log(juan instanceof Persona)
console.log(juan instanceof Object)

console.log(typeof Persona)
console.log(typeof Persona.prototype.gritarNombre)